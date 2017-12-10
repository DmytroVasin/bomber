/**
 * PHASE-SLIDE IS A UI SLIDER FOR PHASER.IO LIBRARY
 *
 * COPYWRITE-2015
 * AUTHOR: MICHAEL DOBEKIDIS (NETGFX.COM)
 *
 */

var phaseSlider = phaseSlider || {};


phaseSlider = function(game) {

    var _this = this;

    game.phaseSlider = _this;
    _this.game = game;
    _this.locked = false;
    _this.slideIndex = 0;
    _this.slider_timer = null;
    _this.tweenObj = {};

    var chevron_left = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAACACAYAAACP+K52AAAOOUlEQVR4Xu2dBZQlRxWGE9zdEmwWh+CwBCfBQnB3wuDuHgLs4u6acGBxJ0GCwyFYFgsECc6ZAAkWEg4WCPp/c14PPW/nvb5/dVW/em/3nnPP7Ozcqq76u7q6rvbuu+2iogjsXrT3XZ3vtrMBfFbd8yuJLym+gPgsYjD4q/h34p+KjxafmGtt7AwAX1pg3V18S/GVxacKgHeMZD4mfrf4mwH5iSKLDPCNNesDxfv2AWgE8Av08/3i/7p9LSLAFxcIrxHv54LRIf91/f0h7opeNIDvJwBeKT5TZnCb7v6lf2wVPye6mhcFYPZVgH1YIWDHuz1M/8G+fnLX9RYB4NNqkm8T36Vrspn//kX1x4vzT9P6nXeAz6DJvW800cz4hbr7hqRuJv7DJOl5BvjMmtSHxTcMQVFO6PvqmhPLbza6xLwCfHZNhnPqtXvg9h+1PUnMz3OJT92jLxSUG4l/Md7HPAJ8Hk3iU+KrJADyK7V5k/hwMRrbP0Z9nEY/9xo97vfVz0sl9P1ztbnO+EqeN4D31AQ+Lb6cCcDfJH+Q+NXif3a05URygPglo5XtXIo9+XrivzeN5gngJQ36M2IUCYd+KeH9xeyVDl1EwmxDrGyHuImPmDeAsScA7oWcmUr2J2JeQDvsjcF+2Js/Id4clEcMdfoGYo5xc2FNu6LGybZwPmOSiH5PfBPxhm93oy8scB8ZgRZtdpQErw7YtW8R1xitoHNGZzaSwwKGLWLi+dTs74yS/4CYrSZKt+bG1AwwjxkrhxXk0JckfAvxVA3L6XAki8YIyLcKtuWks1+tALNSmAwrxyG2ktuKOTWUIMbzNfHlA51zvt6zRoBvr4G9S3y6wCTaIh/SL9gjmrOt2Twsvrcktwell2sD+F4a+JvFrlbFDeHsijlxCPq4LoINoosOqQlgjNkYyt0xvVFtHiTmkRyKMFW+I3Cx7e5kAn0miTxBrV6Y0PIVavMYse3KSbhWu8mF9UvkbH18DQA/U4N9WsKE8Sqg/s6KTtGFOVlMo5NnDTD6/mMTEHqy2uCInCXh6u9yTZ0yK4AxqLxe/AATIbYC9Hz26lkS8RR/DgzgxFkAjGnwLWJeFA79W8L3F29zGhWSvb76PSLQ9zFDA3x6DYpgDpQBhzAx3kOMe6gGerEG8bjAQA4dEmD2q0PFNw0MrC2CbfWOYozkNdDZNIgVccQ+cuBQADOoj4oxRjv0FwnfRvw5p1FhWey90fCAzUMAjE31k2LMdw79UcI3Fx/pNCosG1UwGAarfFNpgIlgxAATMY60sTlBv7CVfKswYE73d5bw28VdZ9+mT872zy4JMC4XvBCEijp0vITxQvzAaVRY9j7qH5U8EpnJUDCVbhIXO6ZdQp1/VgzIDq1IGPc3HtpaiHM3KrmzGInqfB4TcBpFJ8x2wLbA9uDQjyTMysW1Xgs9RQN5rjkYnKtXFaNKZwf4auqTF9q5zUF9R/L4z4gyr4UAFoAdIhjwmmLms0o5V/B11R9nVY5kDuEhwLZKlE0NBCYvFz/SHAxq/F3F7223ywUwq4+Qzi7jx/iYUTfxcUX0enO+SeK8xHiZ8VJzCHCxZ79hvFEOgFEE3iNGDXYIr8AdxJ0xtk6nPWRTw2CxkWC0whOzA/UFmIM3hhsMOA59UMJ3E6++CCogFgd2jqjHuBkyNpJ7itdtC+359AGYu4bJMXo2bK5LsDSPIHe+BiIMFocpx0OHsJHcSYwJYCKlAvxo9fgyZzQjWW7IQ8VDu3gmDTU1DBZjO4ElnTaSFIBRAXHzuISJD99bLZQaBmvZSFyAcUymgLRF7bbWgqzGkRoGa9tIogAjh5uGo4hLGKZf6jYqKH9R9Y0a74bBJtlIIgATBEJUOIEdDhGnwH67w9nQ6SSzLJHrgOuGwa6oTZKNpAtgwpfeKea86hAnhGUx5r1aiDBYAvLObw6ol41kGsApIZuMnbMtKiPuoVooNQy2t41kEsC4pQkd3cdECK3sdmIMPrVQahjsVzUBojx72Ug2Ahh7AgBhvHEIewKZj19wGhWWxYiE1uiGwWIjYS74BHvROMD8zqONfcEh7jKTwTJWC6WGwWa1kYwD/CSh83wTIWy4WNPWbKBm+xLiqWGw2W0kbYDJPcPJ6AQ+433g+PLjEigl9vlgtXutuOuENN79W/UfJCFmtZG0B8G+6wSF/EzyuHhWEoEo0ezx6vRFCR2/Tm2IdchuI2kAJuf3y8bA8PgCLtpNLYQq/vSEwXBDnpjQLtSkAZh4sWi9hW9Llj0XvbwWSg2DfYYmkGK4Cs8bgPGh8aKKeCRISyVCpxbnJLZoHu8Hhmf8f8FBbCQAjNF4okV+bOAk96Fu1kB4UbaJibp0CBsJL8JDnEapsgD8KvHDAx2gQKAV1UCcdPADumGwZCHdW4x9ZRACYJKWI1obA+MoM2tCK0MZcst2kT+HjQTv92AEwMeJMUB3EZk1s466Ia0WHxgR5g6R+YmNZPDtDYC5s13KBUYcN+bBASAim1JagH4JxMOusFpeYGgC4Mjhmqx1fFizImy4xLtdwRwART7ZSqhEMhOaF4CJdePxJqjOIQDGCEVZxJlQdIsgBsA1+eWeEC52Yt8oPOQQZlTKG8xsi4i+5JY0yGOdmRWQTQ0S4SWH+XJwR4BzTKPwJs7PWVNqmNNMXFkATFHNtSpJU9AjGaVPIbicNwYtjhAszrUOoWgsiyOZ8k6/E2UBGI8xxYcjtFqHJiI4gAx2iIPFPFkODRpOAMA4OH8vptBmF/1aAhh7ajFTMn5i5B7VNfAN/o7tGCtcUWrMlTwy0dxh6pvjxehbLivnxChtQOKJS9iQt7iNHPkGYOIGcFNHqW/Bt+h1HDlKHKxm9pjEKmY1F6G2y4i9FZUySlT8YCVTebQWwirIS9v1xxHeRZhX9rI07YGQMIhnOLIXN4CyTeA6cutClrwhy+qcPAu3sBLbJG2zFlYav9MpgdXYKdD3e31vIjPiOBEALJr22lweUyaus2ypDRs9Shiyyct1CIsViduO49TpP0UW9Zjjp/NEch20PUybWZJzNgIYTYnoln3NWaGOEhFEfnItRPlx8i84ijoUKoAf6XDSyyC1eAa2ZVY/tdVroWtpINQBPoc5IEycbH29vms07W2bWv6FlwTB2lTjq4X4hhHmzvOaA/qu5AlR+K3Zbk286zjTx3NLNT7e5rXQZTUQtq+Ie6w95l5n/i6AuVCfElxU5aMUQC10MQ2EFIIlc0DJZ/4IwM1YSGQBMJdWK3+4jQrKk5/BSqZsuUNJZ34HYAaTWgaRKn2osrUQ5crZk/l4n0P2md8FmMGkFvIkDQy7c8TJ6kw6VZayXBxHqQfsEGd+zthU2u6kFIDpNLUU7Ta1pXpf1hjczllOFkjNReHMT1QRnu6plAownXIUw4Xk6vxktRNP1vXBkK6x5/p7ajYVZ37UahSZidQHYDrFG0KcV1fgyvgA8A5TzW/tiym50ErsJzUfsDPWrS/AzCe1oD2Z6qjWvTN5EkEdb9Yno3VitGYOgBnoPmLsya7OjyMVIxEZ7DUQeFA6EduwS7zAabuOcgFMp7yNeStHima2B0HiDbkhNUXMc6x00wo4HZHdtM5jnRNgQONcyfnS/SxOjTkfKXUxeKcQ2rBWEjI3wICMhoQ6ekHzGaPaHy6oFbNdSXE0V7cUww/Vhm/drb7ASwBMv5vEqKPo/g4Rf4wLigz3WiilNhHZTs8qCTB9Y7UCZKxYDtWYOUqFLKL7o9W1OBmxyE4otYIbQLG/4oJxPw9ZY+4zR0qShaJn/tUUsdIAAzSeBDwKeBYcIuyUOmZHOI0Ky6JYoYlGcMPEuRQRzDFmzse4kVw/H45Hwk75KmEt5Jht9x4KYMDBu4uXF0uUQ7jQ2QPJhK+BWCwr4kiF2YOGBBhwiFPgIE7cgkO11QCKljc7bGiAARWdH1/dsoOwZCdWODX7ySFOXmEkJWHwD5U0k+PGkmEa/VxCG5RBwk477gKpDBEj1UmzWMHtsRMNmeJK2qp2W3IsxR59VP2xqPa8nqpfUpyiRcNOO4BnYfLy7VI8Zv65s2YeRKgTqe4+UcXCTjsA5usKxwZW/3HuhAJ9JouQa0HOhVuPmOqCy+Ih/XyYJSOJ8UfWBDB3hqwhsoe6Hr3xu0j2PW2zhZ12LBNMsoRUddHBtQHMgMlkQuePVGBpTzBr2OkU5Mg0DbnsJXdAjQAzN0yWBENzHHKIoiGkQZT6qgFaHHnPlwkMii1rj1oBZvysFLzP5Cg7VOq7HDxRuOijhUCwn+xfM8CASnY9+11E72/fhN5VU8fuKE8STxRPVpR4kg6vHWAms5eYCJo9ojMbyVGNEBdU3yotKYX02UZIjbPPneYcs4n3+boXq44qhSmUUkgfmwnb2+qHBudhBTfAUDMIZ6r7fTrSf3lcjzIRxp/IOyDyQmt3zXeQ1sJ85wlgJpH6hUXiyAi9xVjeFa6FtY8ARWIj3BfsdrWh9NnaeXzeAAbk1OJItMWhuk2MC4vYBUJRIV5i1APihLAsXmovyeC/STXAjLmuKuI8Asx8Ke/F4+t+5XYcK8JQ2TPd8/Z4P7xQSRmjesw6mleAmURqqllwQYbFph4J5xlgEEgtsRhGr0Ows5D+vAPM/FNTzfqC/Hl1QFjBVM/GIgAMUMwDA3xKFlQK0MRGYLLkdDKVFgXgZpJMmmQbXoIliOMXUZdUzQ4l8ywawIDKx6AoyoHZMydhosRJa31tYREBbkDlCEcdH862feb5FbXn0xdJ1bb6XDjn6ijZFyov3g7U5c3iLm8JZWWOFqOMUDuDhPBk2hkAboNDyhYaG/YMrHMY0MEAFzwZ9dQfAtBGw0sGtmm4swHcGzC3g10Au4iZ8v8DJ5N5L8TCTU0AAAAASUVORK5CYII=";

    var chevron_right = "data:image/png;base64,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";

    game.load.image("slider_chevron_left", chevron_left);
    game.load.image("slider_chevron_right", chevron_right);

    _this.goToNext = function() {
        if (_this.locked === true) {
            return false;
        }

        if (_this.options._mode === "horizontal") {
            var finalX = _this.sliderMainGroup.x + (_this.options._width * -1);

            if ((_this.slideIndex >= _this.options._objects.length - 1) && _this.options.autoAnimate === false) {
                _this.stopSlider();
                return false;
            }

            // animate loop
            if (_this.options.autoAnimate === true) {
                if (_this.slideIndex >= _this.options._objects.length - 1) {
                    _this.slideIndex = 0;
                    _this.sliderMainGroup.x = _this.options._x;
                    this.locked = false;
                    return true;
                }
            }
            _this.locked = true;

            _this.tweenObj = game.add.tween(_this.sliderMainGroup).to({
                x: finalX
            }, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
            _this.tweenObj.onComplete.add(function() {
                this.locked = false;
                this.slideIndex += 1;
                if (_this.options.autoAnimate === false && this.slideIndex >= _this.options._objects.length - 1) {
                    if (_this.options._showHandles === true) {
                        this.sliderControlsGroup.children[0].alpha = 0;
                    }
                }

                // enable prev
                if (_this.options._showHandles === true) {
                    this.sliderControlsGroup.children[1].alpha = 1;
                }
            }, _this);
        } else {

            var finalY;
            if (_this.options._mode === "vertical-from-top") {
                finalY = _this.sliderMainGroup.y + (_this.options._height);
            } else if (_this.options._mode === "vertical-from-bottom") {
                finalY = _this.sliderMainGroup.y + (_this.options._height * -1);
            }

            if ((_this.slideIndex >= _this.options._objects.length - 1) && _this.options.autoAnimate === false) {
                _this.stopSlider();
                return false;
            }

            // animate loop
            if (_this.options.autoAnimate === true) {
                if (_this.slideIndex >= _this.options._objects.length - 1) {
                    _this.slideIndex = 0;
                    _this.sliderMainGroup.y = _this.options._y;
                    this.locked = false;
                    return true;
                }
            }

            _this.locked = true;

            _this.tweenObj = game.add.tween(_this.sliderMainGroup).to({
                y: finalY
            }, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
            _this.tweenObj.onComplete.add(function() {
                this.locked = false;
                this.slideIndex += 1;

                if (_this.options.autoAnimate === false && this.slideIndex >= _this.options._objects.length - 1) {
                    if (_this.options._showHandles === true) {
                        this.sliderControlsGroup.children[0].alpha = 0;
                    }
                }

                // enable prev
                if (_this.options._showHandles === true) {
                    this.sliderControlsGroup.children[1].alpha = 1;
                }
            }, _this);
        }
    };
    _this.goToPrev = function() {

        if (_this.locked === true) {
            return false;
        }

        if (_this.options._mode === "horizontal") {
            var finalX = _this.sliderMainGroup.x + (_this.options._width);

            if (_this.slideIndex <= 0 && _this.options.autoAnimate === false) {
                _this.stopSlider();
                return false;
            }

            _this.locked = true;
            _this.tweenObj = game.add.tween(_this.sliderMainGroup).to({
                x: finalX
            }, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
            _this.tweenObj.onComplete.add(function() {
                this.locked = false;
                this.slideIndex -= 1;

                if (this.slideIndex < 0) {
                    this.slideIndex = 0;
                }

                if (_this.options.infiniteLoop === false && this.slideIndex <= 0) {
                    // enable prev
                    if (_this.options._showHandles === true) {
                        this.sliderControlsGroup.children[1].alpha = 0;
                    }
                }

                // enable next
                if (_this.options._showHandles === true) {
                    this.sliderControlsGroup.children[0].alpha = 1;
                }

            }, _this);
        } else {
            var finalY;
            if (_this.options._mode === "vertical-from-top") {
                finalY = _this.sliderMainGroup.y + (_this.options._height * -1);
            } else if (_this.options._mode === "vertical-from-bottom") {
                finalY = _this.sliderMainGroup.y + (_this.options._height);
            }
            if (_this.slideIndex <= 0 && _this.options.autoAnimate === false) {
                _this.stopSlider();
                return false;
            }
            _this.locked = true;
            _this.tweenObj = game.add.tween(_this.sliderMainGroup).to({
                y: finalY
            }, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
            _this.tweenObj.onComplete.add(function() {
                this.locked = false;
                this.slideIndex -= 1;

                if (this.slideIndex < 0) {
                    this.slideIndex = 0;
                }

                if (_this.options.autoAnimate === false && this.slideIndex <= 0) {
                    if (_this.options._showHandles === true) {
                        this.sliderControlsGroup.children[1].alpha = 0;
                    }
                }

                // enable prev
                if (_this.options._showHandles === true) {
                    this.sliderControlsGroup.children[0].alpha = 1;
                }
            }, _this);
        }
    };

    _this.startSlider = function() {
        var _timer = game.time.create(false);
        _timer.start();
        _timer.loop(Phaser.Timer.SECOND * _this.options.animationDelay, _this.goToNext, _this);
        _this.slider_timer = _timer;
    };
    _this.stopSlider = function() {
        if (_this.slider_timer !== null) {
            _this.slider_timer.stop(true);
            _this.slider_timer = null;
        } else {
            return false;
        }
    };

    _this.moveToSlide = function(index, animate) {
        var finalX;
        if (index >= _this.options._objects.length) {
            return false;
        }
        if (_this.options._mode === "horizontal") {
            finalX = (_this.options._x - (_this.options._width * (index)));
            if (animate === true) {

                var tweenObj = game.add.tween(_this.sliderMainGroup).to({
                    x: finalX
                }, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
            } else {
                _this.sliderMainGroup.x = finalX;
            }
        } else if (_this.options._mode === "vertical-from-top") {
            //TODO: ADD VERTICAL-FROM-TOP
        } else if (_this.options._mode === "vertical-from-bottom") {
            //TODO: ADD VERTICAL-FROM-BOTTOM
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    ///
    _this.onDragStart = function(sprite, pointer, dragX, dragY) {
        _this.dragInit = pointer.x;
        _this.lastDrag = pointer.x;
    };

    _this.onDragStop = function(e) {

    };
    _this.dragUpdate = function(sprite, pointer, dragX, dragY) {

        var finalX = dragX; // - _this.options._x;
        // going left
        if (pointer.x < _this.dragInit) {
            var diff = Math.abs(pointer.x) - Math.abs(_this.lastDrag);
            // going right
            if (diff < 0) {
                finalX = _this.sliderMainGroup.x - 1;
            } else {
                finalX = _this.sliderMainGroup.x + 1;
            }
        } else {
            var diff = Math.abs(pointer.x) - Math.abs(_this.lastDrag);
            // going right
            if (diff < 0) {
                finalX = _this.sliderMainGroup.x - 1;
            } else {
                finalX = _this.sliderMainGroup.x + 1;
            }
        }

        if (finalX <= (_this.options._x + (_this.options._width * (_this.options._objects.length - 2))) * -1) {
            finalX = (_this.options._x + (_this.options._width * (_this.options._objects.length - 2))) * -1;
        } else if (finalX >= _this.options._x) {
            finalX = _this.options._x;
        }
        _this.sliderMainGroup.x = finalX;
        _this.lastDrag = pointer.x;
    };

    return {
        createSlider: function(options) {
            // initialize index
            _this.slideIndex = 0;

            _this.options = {
                _mode: options.mode || "horizontal", // horizontal, vertical-from-top, vertical-from-bottom
                _width: options.width || 500,
                _height: options.height || 400,
                _animationEffect: options.animationEffect || "slide", // slide, fade, cover
                autoAnimate: options.autoAnimate || false,
                infiniteLoop: options.infiniteLoop || false,
                animationDelay: options.animationDelay || 2,
                animationDuration: options.animationDuration || 600,
                animationEasing: options.animationEasing || Phaser.Easing.Cubic.Out, //Phaser.Easing.Linear.None,
                _x: options.x || 0,
                _y: options.y || 0,
                _objects: options.objects || [], // can take: single-sprite, single-image, group
                sliderBG: options.sliderBG || 0x35d2e0,
                customSliderBG: options.customSliderBG || false,
                sliderBGAlpha: options.sliderBGAlpha || 1,
                _customHandleNext: options.customHandleNext || "",
                _customHandlePrev: options.customHandlePrev || "",
                _showHandles: options.showHandles == undefined ? true : options.showHandles,
                _onNextCallback: options.onNextCallback || false,
                _onPrevCallback: options.onPrevCallback || false,
                _addModal: options.modal || false,
                _modalAlpha: options.modalAlpha || 0.7,
                _staticElements: options.staticElements || []
            };

            //////////////////////////////////////////////////////////////////////////////////////////////

            var bgRect;
            _this._modal = {};
            if (_this.options._addModal === true) {
                _this._modal = game.add.graphics(game.width, game.height);
                _this._modal.beginFill(0x000000, _this.options._modalAlpha);
                _this._modal.x = 0;
                _this._modal.y = 0;
                _this._modal.inputEnabled = true;
                _this._modal.drawRect(0, 0, _this.game.width, _this.game.height);
            } else {
                _this._modal = false;
            }

            //////// OBJECTS GROUP
            ///
            _this.sliderBGGroup = _this.game.add.group();
            _this.sliderMainGroup = _this.game.add.group();
            _this.sliderBGGroup.width = _this.options._width;
            _this.sliderMainGroup.width = _this.options._width;
            if (_this.options._mode === "horizontal") {
                _this.sliderMainGroup.width = _this.options._width * _this.options._objects.length;

                // if used as a placeholder don't make the width = 0
                if (_this.options._objects.length === 0) {
                    _this.sliderMainGroup.width = _this.options._width;
                }
            } else {
                _this.sliderMainGroup.height = _this.options._height * _this.options._objects.length;

                // if used as a placeholder don't make the height = 0
                if (_this.options._objects.length === 0) {
                    _this.sliderMainGroup.height = _this.options._height;
                }
            }
            _this.sliderMainGroup.height = _this.options._height;
            _this.sliderMainGroup.x = _this.options._x;
            _this.sliderMainGroup.y = _this.options._y;
            //
            _this.sliderBGGroup.height = _this.options._height;
            _this.sliderBGGroup.x = _this.options._x;
            _this.sliderBGGroup.y = _this.options._y;

            /// DRAG for horizontal
            /*var draggableSprite = _this.game.add.sprite(_this.options._x, _this.options._y);
            draggableSprite.width = (_this.options._objects.length+5) * _this.options._width;
            draggableSprite.height = _this.options._height;
            draggableSprite.y = _this.options._y;
            draggableSprite.inputEnabled = true;
            draggableSprite.input.enableDrag();
            draggableSprite.input.allowVerticalDrag = false;
           // draggableSprite.input.enableSnap(_this.options._width, _this.options._height, true, true);
            draggableSprite.events.onDragStart.add(_this.onDragStart, _this);
            draggableSprite.events.onDragStop.add(_this.onDragStop, _this);
            draggableSprite.events.onDragUpdate.add(_this.dragUpdate, _this);
            _this._draggableSprite = draggableSprite;*/

            /////// END OF OBJECTS GROUP

            //////// CONTROLS GROUP
            _this.sliderControlsGroup = _this.game.add.group();
            _this.sliderControlsGroup.width = _this.options._width;
            _this.sliderControlsGroup.height = _this.options._height;
            _this.sliderControlsGroup.x = _this.options._x;
            _this.sliderControlsGroup.y = _this.options._y;

            //////// END OF CONTROLS GROUP

            //MASK
            var maskGraphics = game.add.graphics(0, 0);
            maskGraphics.beginFill(0xffffff);
            maskGraphics.drawRect(_this.options._x, _this.options._y, _this.options._width, _this.options._height);
            _this.sliderMainGroup.mask = maskGraphics;

            /// create main bg
            // if (_this.options.customSliderBG === false) {
            //     bgRect = game.add.graphics(_this.options._width, _this.options._height);
            //     bgRect.beginFill(_this.options.sliderBG, _this.options.sliderBGAlpha);
            //     bgRect.x = _this.options._x;
            //     bgRect.y = _this.options._y;

            //     bgRect.drawRect(0, 0, _this.options._width, _this.options._height);
            //     _this.sliderMainGroup.add(bgRect);
            // } else {
            //     _this.sliderBGGroup.add(_this.options.customSliderBG);
            // }
            // add controls
            if (_this.options._showHandles === true) {

                var chevronRight;
                var chevronLeft;

                if (_this.options._customHandleNext === "") {
                    chevronRight = game.add.image(0, 0, "slider_chevron_right");
                    chevronRight.scale.setTo(0.6, 0.6);
                } else {
                    chevronRight = game.add.image(0, 0, _this.options._customHandleNext);
                }
                chevronRight.x = _this.options._width - (chevronRight.width + 10); //_this.options._x+_this.options._width - (chevronRight.width+10);
                chevronRight.y = (_this.options._height / 2) - chevronRight.height / 2;
                chevronRight.inputEnabled = true;
                chevronRight.events.onInputDown.add(function(e, pointer) {
                    if (_this.options._onNextCallback) {
                        _this.options._onNextCallback();
                    }

                    if (_this.tweenObj.isRunning !== true) {
                        _this.stopSlider();
                        _this.goToNext();
                    }

                }, _this);


                if (_this.options._customHandlePrev === "") {
                    chevronLeft = game.add.image(0, 0, "slider_chevron_left");
                    chevronLeft.scale.setTo(0.6, 0.6);
                } else {
                    chevronLeft = game.add.image(0, 0, _this.options._customHandlePrev);
                }
                chevronLeft.x = 10;
                chevronLeft.y = (_this.options._height / 2) - chevronLeft.height / 2;
                chevronLeft.inputEnabled = true;
                chevronLeft.events.onInputDown.add(function(e, pointer) {
                    if (_this.options._onPrevCallback) {
                        _this.options._onPrevCallback();
                    }

                    if (_this.tweenObj.isRunning !== true) {
                        _this.stopSlider();
                        _this.goToPrev();
                    }

                }, _this);



                // if not infinite initialy hide it
                if (_this.options.infiniteLoop === false) {
                    chevronLeft.alpha = 0;
                }
            } else {

            }


            // ADDING THE BLOCKS
            if (_this.options._objects.length > 0) {
                var objArr = _this.options._objects.slice(0);
                var length = Number(objArr.length);
                for (var i = 0; i < length; i++) {
                    var x;
                    var y;
                    // mode
                    if (_this.options._mode === "horizontal") {
                        objArr[i].x = (_this.options._width * i);
                    } else if (_this.options._mode === "vertical-from-top") {
                        objArr[i].y = (_this.options._height * i) * -1;

                    } else if (_this.options._mode === "vertical-from-bottom") {
                        objArr[i].y = (_this.options._height * i);
                    }
                    _this.sliderMainGroup.add(objArr[i]);
                }
                _this.options._objects = _this.sliderMainGroup.children;
                //window.console.log(_this.options._objects.length, _this.options._objects,  _this.sliderMainGroup.children.length);
            }


            // ADDING STATIC ELEMENTS
            if (_this.options._staticElements.length > 0) {
                for (var i = 0; i < _this.options._staticElements.length; i++) {
                    game.world.bringToTop(_this.options._staticElements[i]);
                    _this.sliderBGGroup.add(_this.options._staticElements[i]);
                }
            }


            // move the chevrons to top
            if (_this.options._showHandles === true) {
                _this.sliderControlsGroup.add(chevronRight);
                _this.sliderControlsGroup.add(chevronLeft);
            }

            //////////// AUTO ANIMATE
            if (_this.options.autoAnimate === true) {
                _this.startSlider();
            }

        },
        startSlider: function() {
            _this.startSlider();
        },
        stopSlider: function() {
            _this.startSlider();
        },
        moveToSlide: function(index, animate) {

            _this.moveToSlide(index, animate);
        },
        goToNext: function() {
            _this.goToNext();
        },
        goToPrev: function() {
            _this.goToPrev();
        },
        getCurrentIndex: function() {
            return _this.slideIndex;
        },
        refreshSlider: function() {

        },
        removeItemAt: function(index) {
            _this.sliderMainGroup.removeChildAt(index);
            _this.options._objects = _this.sliderMainGroup.children;
        },
        hideSlider: function() {
            _this.sliderMainGroup.visible = false;
            _this.sliderControlsGroup.visible = false;
            _this.sliderBGGroup.visible = false;
            if (_this._modal) {
                _this._modal.visible = false;
            }
        },
        showSlider: function() {
            _this.sliderMainGroup.visible = true;
            _this.sliderControlsGroup.visible = true;
            _this.sliderBGGroup.visible = true;
            if (_this._modal) {
                _this._modal.visible = true;
            }
        }
    };
};
