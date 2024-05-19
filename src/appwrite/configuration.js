import config from "../Config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Services{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log('Appwrite services :: createPost :: error', error);
        }
    }
    
    async updatePost(slug, {title, slug, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log('Appwrite services :: createPost :: error', error);
        }
    }
    
    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
                
            )
        } catch (error) {
            console.log('Appwrite services :: createPost :: error', error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
                
            )
        } catch (error) {
            console.log('Appwrite services :: createPost :: error', error);
            return false
        }
    }

    async getPost(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
                
            )
        } catch (error) {
            console.log('Appwrite services :: createPost :: error', error);
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite services :: createPost :: error', error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log('Appwrite services :: createPost :: error', error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const services = new Services()
export default services