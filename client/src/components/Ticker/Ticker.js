import './Ticker.scss';
import { Component } from 'react';

class Ticker extends Component {

    render () {
        return (
            <section className='ticker'>
                <div class="ticker__wrap">
                    <div class="ticker__itemContainer">
                        <div class="ticker__item"><p className='ticker__itemText'>🚨 Actively Looking For Work</p></div>
                        <div class="ticker__item"><p className='ticker__itemText'>Recent BrainStation 🧠 Graduate</p></div>
                        <div class="ticker__item"><p className='ticker__itemText'>Working on my own projects 💻 github.com/nick-albu</p></div>
                        <div class="ticker__item"><p className='ticker__itemText'>Constantly learning 🤓</p></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Ticker;