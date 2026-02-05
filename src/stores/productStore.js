import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const API_BASE_URL =
  process.env.API_URL || "https://warsaw-backend.vercel.app/v1";

// Helper to map frontend sort keys to actual DB columns
const mapSortColumn = (sortBy) => {
  if (!sortBy) return undefined;
  return sortBy
    .replace("createdAt", "created_date_time")
    .replace("updatedAt", "modified_date_time");
};

const useProductStore = create(
  devtools(
    persist(
      (set, get) => ({
        // State
        products: [],
        product: null,
        loading: false,
        error: null,
        pagination: {
          page: 1,
          limit: 12,
          total: 0,
          pages: 0,
        },
        filters: {
          name: "",
          category: "",
          minPrice: "",
          maxPrice: "",
          isActive: "",
          sortBy: "created_date_time:desc",
        },

        // Actions
        setLoading: (loading) => set({ loading }),
        setError: (error) => set({ error }),
        setFilters: (newFilters) =>
          set((state) => ({
            filters: { ...state.filters, ...newFilters },
          })),
        setPagination: (newPagination) =>
          set((state) => ({
            pagination: { ...state.pagination, ...newPagination },
          })),
        resetFilters: () =>
          set({
            filters: {
              name: "",
              category: "",
              minPrice: "",
              maxPrice: "",
              isActive: "",
              sortBy: "created_date_time:desc",
            },
            pagination: { page: 1, limit: 12, total: 0, pages: 0 },
          }),

        // Async Actions
        createProduct: async (productData) => {
          set({ loading: true, error: null });
          try {
            const res = await fetch(`${API_BASE_URL}/products`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(productData),
            });
            if (!res.ok) {
              const errorData = await res.json();
              throw new Error(errorData.message || "Failed to create product");
            }
            const data = await res.json();
            const product = data.data || data.product || data;

            set((state) => ({
              products: [product, ...state.products],
              loading: false,
            }));
            return product;
          } catch (err) {
            const errorMsg =
              err instanceof Error ? err.message : "An error occurred";
            set({ error: errorMsg, loading: false });
            throw err;
          }
        },

        getProducts: async () => {
          set({ loading: true, error: null });
          try {
            const { filters } = get();

            // Build query params, filtering out empty/null values
            const queryObj = {};

            if (filters.name && filters.name.trim()) queryObj.name = filters.name;
            if (filters.category) queryObj.category = filters.category;
            if (filters.minPrice !== null && filters.minPrice !== "")
              queryObj.minPrice = Number(filters.minPrice);
            if (filters.maxPrice !== null && filters.maxPrice !== "")
              queryObj.maxPrice = Number(filters.maxPrice);
            if (filters.isActive) queryObj.isActive = filters.isActive;
            if (filters.sortBy)
              queryObj.sortBy = mapSortColumn(filters.sortBy);

            // Add numeric pagination
            queryObj.page = Number(filters.page) || 1;
            queryObj.limit = Number(filters.limit) || 12;

            const params = new URLSearchParams(queryObj);
            const res = await fetch(`${API_BASE_URL}/products?${params}`);

            if (!res.ok) {
              const errorData = await res.json();
              throw new Error(errorData.message || "Failed to fetch products");
            }

            const result = await res.json();

            const products = result.results || result.data || [];
            const paginationData = {
              page: result.page || Number(filters.page) || 1,
              limit: result.limit || Number(filters.limit) || 12,
              total: result.totalResults || result.total || 0,
              pages: result.totalPages || result.pages || 0,
            };

            set({ products, pagination: paginationData, loading: false });

            return result;
          } catch (err) {
            const errorMsg =
              err instanceof Error ? err.message : "An error occurred";
            set({ error: errorMsg, loading: false });
            throw err;
          }
        },

        getProduct: async (productId) => {
          set({ loading: true, error: null });
          try {
            const res = await fetch(`${API_BASE_URL}/products/${productId}`);
            if (!res.ok) {
              const errorData = await res.json();
              throw new Error(errorData.message || "Product not found");
            }

            const data = await res.json();
            const product = data.data || data.product || data;

            set({ product, loading: false });
            return product;
          } catch (err) {
            const errorMsg =
              err instanceof Error ? err.message : "An error occurred";
            set({ error: errorMsg, loading: false });
            throw err;
          }
        },

        updateProduct: async (productId, updateData) => {
          set({ loading: true, error: null });
          try {
            const res = await fetch(`${API_BASE_URL}/products/${productId}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updateData),
            });

            if (!res.ok) {
              const errorData = await res.json();
              throw new Error(errorData.message || "Failed to update product");
            }

            const data = await res.json();
            const product = data.data || data.product || data;

            set((state) => ({
              product,
              products: state.products.map((p) =>
                p.id === productId ? product : p
              ),
              loading: false,
            }));

            return product;
          } catch (err) {
            const errorMsg =
              err instanceof Error ? err.message : "An error occurred";
            set({ error: errorMsg, loading: false });
            throw err;
          }
        },

        deleteProduct: async (productId) => {
          set({ loading: true, error: null });
          try {
            const res = await fetch(`${API_BASE_URL}/products/${productId}`, {
              method: "DELETE",
            });

            if (!res.ok) {
              const errorData = await res.json();
              throw new Error(errorData.message || "Failed to delete product");
            }

            set((state) => ({
              products: state.products.filter((p) => p.id !== productId),
              product: state.product?.id === productId ? null : state.product,
              loading: false,
            }));
          } catch (err) {
            const errorMsg =
              err instanceof Error ? err.message : "An error occurred";
            set({ error: errorMsg, loading: false });
            throw err;
          }
        },

        clearError: () => set({ error: null }),
        clearProduct: () => set({ product: null }),
      }),
      {
        name: "product-store",
        partialize: (state) => ({
          filters: state.filters,
          pagination: state.pagination,
        }),
      }
    )
  )
);

export default useProductStore;
