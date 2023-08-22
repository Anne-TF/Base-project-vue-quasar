import { ExtendedPokemonInterface, PokemonInterface } from '../interfaces/pokemon.interface';
import { config } from 'src/app/repositories/config';
import { HttpService } from 'src/app/services/http.service';
import { PayloadPropsInterface } from 'src/app/interfaces/payload-props.interface';

const { baseUrl } = config.apiGateway.server;
const { getAll, getByOrder } = config.apiGateway.routes.pokemon;

class PokemonRepository
{
    public getPokemons({ queryParams, data }: PayloadPropsInterface)
    {
        const options: any = {
            url: `${baseUrl}/${getAll}`,
            method: 'GET',
            ...data
        };
        return HttpService.request<PokemonInterface>({ config: options, queryParams });
    }

    public getPokemonByOrder({ queryParams, data }: PayloadPropsInterface)
    {
        const options: any = {
            url: `${baseUrl}/${getByOrder}/${queryParams?.order}`,
            method: 'GET',
            ...data
        };
        return HttpService.request<ExtendedPokemonInterface>({ config: options, queryParams });
    }
}

export default PokemonRepository;
