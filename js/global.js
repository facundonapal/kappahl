// Global object to allow variables in markup
window.KappAhl = (function() {
    var values = {};

    function KappAhl() { }

    KappAhl.QUANTITY_EMPTY = 2;
    KappAhl.QUANTITY_HALF = 1;
    KappAhl.QUANTITY_FULL = 0;

    KappAhl._checkout_product_options = { products: {} };
    KappAhl._image_gallery_data = { };

    /**
    Add key value pair

    @method addKeyValuePair
    @return {Void}
    **/
    KappAhl.addKeyValuePair = function(key, value) {
        values[key] = value;
    };

    /**
    Get key value pair

    @method getKeyValue
    @return {Void}
    **/
    KappAhl.getKeyValue = function(key) {
        return values[key];
    };

    /**
    Set product options

    @method setProductOptions
    @return {Void}
    **/
    KappAhl.setProductOptions = function(options) {
        KappAhl._product_options = options;
    };

    /**
    Get product options

    @method getProductOptions
    @return {Object}
    **/
    KappAhl.getProductOptions = function() {
        return KappAhl._product_options;
    };

    /**
    Set checkout product options

    @method setCheckoutProductOptions
    @param {Int} productNumber
    @param {Object} options
    @return {Void}
    **/
    KappAhl.setCheckoutProductOptions = function(productNumber, options) {
        KappAhl._checkout_product_options.products[productNumber] = options;
    };

    /**
    Get checkout product options

    @method getCheckoutProductOptions
    @return {Object}
    **/
    KappAhl.getCheckoutProductOptions = function() {
        return KappAhl._checkout_product_options;
    };

    /**
    Set image gallery data

    @method setImageGalleryData
    @param {Int} id
    @param {Object} options
    @return {Void}
    **/
    KappAhl.setImageGalleryData = function(id, options) {
        KappAhl._image_gallery_data[id] = options;
    };

    /**
    Get image gallery data

    @method getImageGalleryData
    @return {Object}
    **/
    KappAhl.getImageGalleryData = function() {
        return KappAhl._image_gallery_data;
    };

    /**
    Set map markers

    @method setMapMarkers
    @return {Void}
    **/
    KappAhl.setMapMarkers = function(markers) {
        KappAhl._map_markers = markers;
    };

    /**
    Get map markers

    @method getMapMarkers
    @return {Void}
    **/
    KappAhl.getMapMarkers = function() {
        return KappAhl._map_markers;
    };
    /**
    Set member details init function

    @method setMemberDetailsInit
    @return {Void}
    **/
    KappAhl.setMemberDetailsInit = function (initFn) {
        KappAhl._memberDetailsInit = initFn;
    };
    /**
        Triggers member details init function
    
        @method triggerMemberDetailsInit
        @return {Void}
        **/
    KappAhl.triggerMemberDetailsInit = function () {
        if (typeof(KappAhl._memberDetailsInit)=='function')
            return KappAhl._memberDetailsInit();
        return false;
    };

    return KappAhl;
}());
