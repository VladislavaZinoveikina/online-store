import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Fridges"},
            {id: 1, name: "Smartphones"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 1, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'},
            {id: 2, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'},
            {id: 3, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'},
            {id: 4, name: "Iphone 12 pro max", price: 1200, rating: 5, img: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-gold.jpg'}
        ]
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

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}