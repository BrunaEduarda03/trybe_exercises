const chess_piece = 'rei';

switch(chess_piece.toLowerCase())
{
    case 'Rei':
        console.log('Move uma casa em qunalquer direção');
        break;
    case 'Bispo':
        console.log('Move qunatas casas possíveis apenas na diagonal');
        break;
    case 'Torre':
        console.log('Move qunatas casas possíveis na horrizontal ou vertical');
        break;
    case 'Cavalo':
        console.log('Move em formato de L');
        break;
    case 'Rainha':
        console.log('Move qunatas casas possíveis na horrizontal ou diagonal ou vertical');
        break;
    case 'Peão':
        console.log('Move duas casas para frente na primeira partida e depois,uma por vez e come na diagonal');
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
};