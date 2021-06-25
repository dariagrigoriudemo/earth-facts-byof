import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bulma/css/bulma.min.css';
import './cards.css';
import { Button , Section, Navbar, hoverable , dropdown} from 'react-bulma-components';
import * as selectors  from './application/selectors';
import * as uiCommands from './application/commands/ui';

// const styles = {
//   container: {
//     flex: 1,
//   },
// };
// Use bulma for react : https://react-bulma.io/docs/components/components/navbar

function App() {
  const dispatch = useDispatch();
  const value = 'World';
  const loading = useSelector(selectors.getLoading);
  const facts = useSelector(selectors.getFacts);
  const errors = useSelector(selectors.getFactsLoadingError);
  const tabName = useSelector(selectors.getTab);
  const me = useSelector(selectors.getAuth);
  console.log('errors:', errors);
  console.log('facts', facts);
  console.log('tabName',tabName);

  useEffect(() => {
      dispatch(uiCommands.appLoaded);
  }, [dispatch]);

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
      <Navbar.Container position="end" align = "right">
        <Navbar.Item href="#" onClick = {() => dispatch(uiCommands.setTab("facts"))}>Earth Facts</Navbar.Item>
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

        {errors !=null 
          ? ('Loading error' + errors) 
          : ( 
            loading ? 'Loading earth facts...' 
            :(
          <div id="app" className="row columns is-multiline">
            <div v-for="card in cardData" key="card.id" className="column is-4">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by16">
                    <img src="07bluemarbleearth_thumbnail.jpg" alt="Image"/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        {/* <img :src="card.avatar" alt="Image"> */}
                      </figure>
                    </div>
                    <div className="media-content">
                    {facts.recommendedFact.title}
                      {/* <p className="title is-4 no-padding">{{card.user.title}}</p> */}
                      <p/>
                        <span className="title is-6"/>
                        {facts.recommendedFact.details}
                          {/* <a :href=`http://twitter.com/${card.user.handle}`> {{card.user.handle}} </a> </span> </p> */}
                      {/* <p className="subtitle is-6">{{card.user.title}}</p> */}
                    </div>
                  </div>
                  <div className="content">
                    {/* {{card.content}} */}
                    <div className="background-icon"><span className="icon-twitter"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
          )
        }
      </div>
       ) 
       : ('sentiment demo UI :')}

      <div>Hello {value} ! 2021</div>
      
     


    </div>
  </Section>;
}

export default App;
