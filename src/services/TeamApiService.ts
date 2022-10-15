import type {TeamMatchesModel, TeamModel} from '@/shared/models/Team';
import { AbstractApiService } from './AbstractApiService';

class TeamApiService extends AbstractApiService {
    public constructor() {
        super('/teams');
    }

    public getTeam(id: number): Promise<TeamModel> {
        return this.http.get(`/${id}`)
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this));
    }

    public getTeamMatches(id: number): Promise<TeamMatchesModel> {
        return this.http.get(`/${id}/matches`)
            .then(this.handleResponse.bind(this))
            .catch(this.handleError.bind(this));
    }
}

export const teamApiService: TeamApiService = new TeamApiService();