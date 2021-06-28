import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bulma/css/bulma.min.css';
import './cards.css';
import { Button , Section, Navbar, hoverable , dropdown} from 'react-bulma-components';
import * as selectors  from './application/selectors';
import * as uiCommands from './application/commands/ui';
import ReactWordcloud from 'react-wordcloud';

// const styles = {
//   container: {
//     flex: 1,
//   },
// };
// Use bulma for react : https://react-bulma.io/docs/components/components/navbar

function App() {
  const dispatch = useDispatch();
  const value = 'World';
  // const loading = useSelector(selectors.getLoading);
  // const facts = useSelector(selectors.getFacts);
  // const errors = useSelector(selectors.getFactsLoadingError);
  const tabName = "sentiment";//useSelector(selectors.getTab);
  const me = useSelector(selectors.getAuth);
  // console.log('errors:', errors);
  // console.log('facts', facts);
  const sentiment = useSelector(selectors.getSentiment);
  const sentimenterror = useSelector(selectors.getSentimentError);
  console.log('sentiment data',sentiment, sentimenterror);
  if(sentiment) {
    console.log(typeof(sentiment.headers));
  }
  console.log('tabName',tabName);
  console.log("env", process.env);

  useEffect(() => {
      dispatch(uiCommands.appLoaded);
  }, [dispatch]);

  const callbacks = {
    getWordColor: word => word.value > 4 ? "green": word.value >1 ? "blue" : "red",
    onWordClick: console.log,
    onWordMouseOver: console.log
    //getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }
  return <Section>

  <Navbar fixed>
    {/* <Navbar.Brand>
      <Navbar.Item renderAs="a"href="#">
        <img
src="https://bulma.io/images/bulma-logo.png"
alt="Bulma: a modern CSS framework based on Flexbox"
width="112"
height="28"
/>
      </Navbar.Item>
      <Navbar.Burger/>
    </Navbar.Brand> */}
    <Navbar.Menu>
      {/* <Navbar.Container>
        <Navbar.Item dropdown hoverable href="#">
          <Navbar.Link>First</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item href="#">Subitem 1</Navbar.Item>
            <Navbar.Item href="#">Subitem 2</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
        <Navbar.Item href="#">Second</Navbar.Item>
      </Navbar.Container> */}
      <Navbar.Link> 
        {me?.clientPrincipal == null 
        ?(<a href="/.auth/login/twitter"> <span role="img">🔐</span> Login </a>)
        :(<div>
          <span> [{me.clientPrincipal.userDetails}]</span><a href="/.auth/logout"> <span role="img">🔓 </span> Logout </a>
        </div>)
        }
      </Navbar.Link>
      <Navbar.Container position="end" align = "left">
      {/* </Navbar.Container>
      <Navbar.Container position="end" align = "right"> */}
        <Navbar.Item href="#" onClick = {() => dispatch(uiCommands.setTab("sentiment"))}>Earth Sentiment</Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>

    <div className="container">
      
    { tabName === "facts" ? (

      <div className="section">
        <div className="columns">
          <div className="column has-text-centered">
            <h1 className="title" styles="color: ghostwhite;">{tabName === 'facts' ? 'Earth Facts Demo' : 'Earth Sentiment Demo' }</h1><br/>
          </div>
        </div>

        
      </div>
       ): 
        sentimenterror!= null 
       ? ('Loading error' + sentimenterror) 
       : sentiment == null || sentiment.headers == null
        ? ('sentiment demo UI : loading....')
        : (
          <div>
            <ReactWordcloud 
            callbacks={callbacks}   
            words={sentiment.tokens} />
            {/* <p><b>Headers:</b></p>
            <ul>
              <li>
              {Object.entries(sentiment.headers).map((header) =>
                <li key={header}>
                  {header}
                </li>
              )}
              </li>
            </ul> */}
          </div>
        )
      }

      <div>Hello {value} ! 2021</div>
     
    </div>
  </Section>;
}

export default App;
