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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var actor_service_1 = require("./../actor.service");
var usuario_service_1 = require("./../usuario.service");
var RankingFavoritosComponent = (function () {
    function RankingFavoritosComponent(actorService, route, location, usuarioService) {
        this.actorService = actorService;
        this.route = route;
        this.location = location;
        this.usuarioService = usuarioService;
    }
    RankingFavoritosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.actorService.getActoresFavoritos(_this.usuarioService.getToken()); })
            .subscribe(function (listaActores) { return _this.listaFavoritos = listaActores; });
    };
    return RankingFavoritosComponent;
}());
RankingFavoritosComponent = __decorate([
    core_1.Component({
        selector: 'ranking-favoritos',
        template: "\n    <div class=\"card-panel teal lighten-2 black-text\">\n    <div class=\"container\">\n    <table class=\"centered\">\n      <thead>\n      <tr>\n        <th>Actor</th>\n        <th>Cantidad de favoritos</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let actorFav of listaFavoritos\">\n        <td>{{actorFav.actor.nombre}}</td>\n        <td>{{actorFav.cantidadFavoritos}}</td>\n      </tr>\n      </tbody>\n    </table>\n    </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [actor_service_1.ActorService, router_1.ActivatedRoute, common_1.Location, usuario_service_1.UsuarioService])
], RankingFavoritosComponent);
exports.RankingFavoritosComponent = RankingFavoritosComponent;
//# sourceMappingURL=ranking-favoritos.component.js.map