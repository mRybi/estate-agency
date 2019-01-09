import { Label } from 'office-ui-fabric-react/lib/Label';
import * as React from 'react';
import './home.css';
import { Button } from 'office-ui-fabric-react';
import { withRouter, RouteComponentProps } from 'react-router';

class RouterProps {}
type Props = RouteComponentProps<RouterProps>;
class State {

}

class Home extends React.Component<Props, State> {

  public render() {
    return (
      <div>
        <div id="mainPage">

          <div id="photo"/>

          <div id="buttons">
              <Button className="button" id="logInButton" onClick={() => this.props.history.push('/login')}>Log In</Button>
              <Button className="button signUpButton" onClick={() => this.props.history.push('/register')}>Sign Up</Button>
          </div>

          <div id="description">
            <h4>Witamy na naszej stronie!</h4>
            Nasza firma to biuro zajmujace sie posrednictwem w obrocie nieruchomosciami. Posiadamy licencje zawodowa oraz ubezpieczenie od odpowiedzialnosci cywilnej z tytulu wykonywania zawodu posrednika.
            Kameralny charakter naszego Biura sprawia, ze wspolpracujemy z Panstwem w przyjaznej atmosferze. Kladziemy nacisk na bezposrednia, partnerska relacje, poparta najwyzszymi standardami zawodowymi
            oraz wzajemnym szacunkiem. Nasza firma to grupa ludzi, ktorzy sluzac swym doswiadczeniem i wiedza, pomoga Panstwu wybrac najlepsze rozwiazania.
            Doradzimy jak sprzedac, wynajac mieszkanie, zakupic nowe lokum na rynku wtornym lub pierwotnym. Dla nas owocna wspolpraca zaczyna sie juz od pomocy w wyszukaniu najodpowiedniejszej nieruchomosci,
            az do podpisania korzystnych warunkow umowy.
            Mamy nadzieje, iz nasza witryna internetowa ulatwi Panstwu dostep do poszukiwanych nieruchomosci oraz stworzy mozliwosc zamieszczenia wlasnych ogloszen w naszej bazie informacyjnej.
            Zapraszamy do wspolpracy!
      </div>

          <div id="footer">
            Wszystkie prawa zastrzerzone;
    </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);