"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var MovieListService = (function () {
    function MovieListService(http) {
        this.http = http;
        this.results = [];
        this.loading = false;
    }
    MovieListService.prototype.getMovieLists = function () {
        return this.http.get('http://localhost:8080/movielists')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieListService.prototype.createMovieList = function (body) {
        var url = 'http://localhost:8080/movielists';
        var bodyString = JSON.stringify(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.commentsUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    MovieListService.prototype.getMovieList = function (id) {
        var url = "http://localhost:8080/movielists/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieListService.prototype.getInterseccion = function (list1, list2) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var url = "http://localhost:8080/movielists/compare?list1=" + list1 + "&list2=" + list2;
            _this.http.get(url)
                .toPromise()
                .then(function (res) {
                _this.results = res.json();
                resolve();
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    MovieListService.prototype.handleError = function (error) {
        console.error('Error', error);
        return Promise.reject(error.message || error);
    };
    return MovieListService;
}());
MovieListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieListService);
exports.MovieListService = MovieListService;
//# sourceMappingURL=movie-list.service.js.map