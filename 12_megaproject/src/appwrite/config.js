import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featureImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featureImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug
            )
        } catch (error) {
            console.log("service :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                slug
            )
        } catch (error) {
            console.log("service :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabase,
                conf.appwriteCollection,
                queries
            )
        } catch (error) {
            console.log("service :: getPosts :: error", error);
            return false
        }
    }

    // File related

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucket,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucket,
                fileId
            )
            return true
        } catch (error) {
            console.log("service :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucket,
            fileId
        )
    }
}

const service = new Service();

export default service