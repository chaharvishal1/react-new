const conf = {
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteDatabase : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollection : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucket : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf