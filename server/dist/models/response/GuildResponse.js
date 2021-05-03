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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class GuildResponse {
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], GuildResponse.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], GuildResponse.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], GuildResponse.prototype, "icon", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], GuildResponse.prototype, "default_channel_id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], GuildResponse.prototype, "ownerId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], GuildResponse.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], GuildResponse.prototype, "updatedAt", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Boolean }),
    __metadata("design:type", Boolean)
], GuildResponse.prototype, "hasNotification", void 0);
exports.GuildResponse = GuildResponse;
//# sourceMappingURL=GuildResponse.js.map