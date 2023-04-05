import api from './api';

class TutorialService {
    getAllTutorials(params) {
        return api.get("/tutorials", { params });
    }
    getTutorialsById(id) {
        return api.get(`/tutorials/${id}`);
    }

    creatTutorial(data) {
        return api.post("/tutorials", data);
    }

    updateTutorial(id, data) {
        return api.put(`/tutorials/${id}`, data);
    }

    removeTutorial(id) {
        return api.delete(`/tutorials/${id}`);
    }

    removeAllTutorials() {
        return api.delete(`/tutorials`);
    }

    findByTitle(title) {
        return api.get(`/tutorials?title=${title}`);
    }
}
export default new TutorialService();
