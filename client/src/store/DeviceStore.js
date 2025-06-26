import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Fridges"},
            {id: 2, name: "Smartphones"},
            {id: 3, name: "PCs"},
            {id: 4, name: "Headphones"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Xiaomi"},
            {id: 4, name: "OnePlus"} 
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'},
            {id: 2, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'},
            {id: 3, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'},
            {id: 4, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'},
            {id: 5, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'},
            {id: 6, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}