import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();
    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      {loading:true}, // Primeiro parâmetro da setState()!
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        // console.log(requestObject);
    this.setState({
      loading:false,
      jokeObj: requestObject,
    });
  });
}

componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    //this.setState(({ meuArrayNoEstado }) => ({meuArrayNoEstado: [...meuArrayNoEstado, novoElemento] }))
    this.setState(({storedJokes,jokeObj}) => ({
      storedJokes: [...storedJokes,jokeObj]
    }));
    this.fetchJoke();
  }

  

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button 
        type='button'
        onClick={this.saveJoke}
        >
        Salvar a piada!
        </button>
      </div>
      
    )
    
    }
  render() {
    const { storedJokes,jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span> 
        <p>{ loading ? loadingElement : this.renderJokeElement() }</p>
      {
        /*
        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
      }

      </div>
    );
  }
}

export default DadJoke;