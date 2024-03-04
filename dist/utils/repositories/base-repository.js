"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(baseRepository) {
        this.baseRepository = baseRepository;
    }
    getRepository() {
        return this.baseRepository;
    }
    getEntityManager() {
        return this.baseRepository.manager;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base-repository.js.map