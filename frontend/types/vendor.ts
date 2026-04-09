export interface Vendor {
    vendorId?: string; // Optional when creating - the lambda generates it
    name: string;
    category: string;
    contactEmail: string;
    createdAt?: string;
}
