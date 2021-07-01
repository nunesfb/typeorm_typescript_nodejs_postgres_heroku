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
var typeorm_1 = require("typeorm");
var Candidate = /** @class */ (function () {
    function Candidate() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Candidate.prototype, "id_candidate", void 0);
    __decorate([
        typeorm_1.Column('character varying', { length: 150 }),
        __metadata("design:type", String)
    ], Candidate.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column('character varying', { length: 100 }),
        __metadata("design:type", String)
    ], Candidate.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column('character varying', { length: 20 }),
        __metadata("design:type", String)
    ], Candidate.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column('character varying', { length: 20 }),
        __metadata("design:type", String)
    ], Candidate.prototype, "cpf", void 0);
    __decorate([
        typeorm_1.Column('character varying', { length: 50 }),
        __metadata("design:type", String)
    ], Candidate.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column('character varying', { length: 50, nullable: true }),
        __metadata("design:type", String)
    ], Candidate.prototype, "profile_photo", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Candidate.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Candidate.prototype, "updated_at", void 0);
    Candidate = __decorate([
        typeorm_1.Entity('candidate')
    ], Candidate);
    return Candidate;
}());
exports.default = Candidate;
