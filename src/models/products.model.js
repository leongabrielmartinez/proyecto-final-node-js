import { db } from './firebase.js';

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getProductsByName = async (producto) => {
	try {
		const q = query(
			productsCollection,
			where('producto', '>=', producto),
			where('producto', '<=', producto + '\uf8ff')
		);
		const snapshot = await getDocs(q);

		const products = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));

		return products;
	} catch (error) {
		console.error('Error searching products by name:', error);
		return [];
	}
};

export const getProductsByPriceAsc = async () => {
	try {
		const snapshot = await getDocs(productsCollection);

		const products = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));

		const sortedProducts = products.sort((a, b) => a.precio - b.precio);

		return sortedProducts;
	} catch (error) {
		console.error('Error fetching and sorting products by price:', error);
		return [];
	}
};

export const getAllProducts = async () => {
	try {
		const snapshot = await getDocs(productsCollection);
		const products = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data()
		}));
		return products;
	} catch (error) {
		console.error(error);
	}
};

export const getProductById = async (id) => {
	try {
		const docRef = doc(productsCollection, id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return { id: docSnap.id, ...docSnap.data() };
		} else {
			return null;
		}
	} catch (error) {
		console.error(error);
	}
};

export const createProduct = async (newProduct) => {
	try {
		const docRef = await addDoc(productsCollection, newProduct);
		return { id: docRef.id, ...newProduct };
	} catch (error) {
		console.error(error);
	}
};

export const updateProduct = async (id, updatedProductData) => {
	try {
		const docRef = doc(productsCollection, id);
		await setDoc(docRef, updatedProductData, { merge: true });
		return { id, ...updatedProductData };
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const deleteProduct = async (id) => {
	try {
		const docRef = doc(productsCollection, id);
		await deleteDoc(docRef);
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
};
