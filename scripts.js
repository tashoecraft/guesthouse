
var Carousel = Carousel || {

    carouselArray: ["Carousel1", "Carousel2", "Carousel3"],

    currentPicture: 0
};


Carousel.events = {
    carouselChange: function(direction) {
        if (direction === 'L') {
            if (this.currentPicture === 0) {
                this.currentPicture = 2;
            } else this.currentPicture -= 1;
            $(".mainBanner").css("background-image", "url('Images/" + this.carouselArray[this.currentPicture] + ".png')");
        } else {
            if (this.currentPicture === 2) {
                this.currentPicture = 0;
            } else this.currentPicture++;
            $(".mainBanner").css("background-image", "url('Images/" + this.carouselArray[this.currentPicture] + ".png')");
        }
    },

    nextImage: function() {
        var changeThis = this;
        $(".arrowLeft").click(function() {
            changeThis.carouselChange('L');
        });
    },

    previousImage: function() {
        var changeThis = this;
        $(".arrowRight").click(function() {
            changeThis.carouselChange('R');
        });
    },

    slideShow: function() {
        var changeThis = this;
        setInterval(function () {
            changeThis.carouselChange('R');
        }, 4000)
    }


};


Carousel.events.slideShow();
Carousel.events.nextImage();
Carousel.events.previousImage();
