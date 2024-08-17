/**
 * @file lunr.ts
 * @description Lunr search engine configuration
 * @version 1.0.0
 */
// Internal imports
import Fuse, { IFuseOptions } from "fuse.js";
import documentsJson from "@/contents/tim-kiem.json";

export type DocumentType = 'company' | 'platform' | 'services' | 'contact';
export type TDocument = {
    id: number;
    title: string;
    body: string;
    type: DocumentType;
    href?: string;
};

const documents: TDocument[] = documentsJson.documents as TDocument[];

const options = {
    keys: ["title", "body"],
    threshold: 0.3,
    minMatchCharLength: 3,
} satisfies IFuseOptions<TDocument>;

export default new Fuse(documents, options);