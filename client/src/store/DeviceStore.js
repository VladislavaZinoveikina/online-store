import { makeAutoObservable, reaction } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalDeviceCount = 0
        this._limit = 3
        this._orders = JSON.parse(localStorage.getItem('cart')) || []
        this._openCart = false;
        makeAutoObservable(this);

        reaction(
            () => this._orders.map(ord => ({ id: ord.id, count: ord.count })),
            () => {
                localStorage.setItem('cart', JSON.stringify(this._orders));
            }
        )
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
        this.setPage(1)
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand;
    }
    setPage(page) {
        this._page = page;
    }
    setTotalDeviceCount(count) {
        this._totalDeviceCount = count;
    }
    setOrders(order) {
        this._orders = order;
    }
    addToOrder(device) {
        const existing = this._orders.find(d => d.id === device.id);
        if (existing) {
            existing.count += 1;
        } else {
            this._orders.push({ ...device, count: 1 });
        }
    }
    clearOrders() {
        this._orders = [];
    }
    setOpenCart(bool) {
        this._openCart = bool;
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
    get totalDeviceCount() {
        return this._totalDeviceCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get order() {
        return this._orders
    }
    get openCart() {
        return this._openCart;
    }
}