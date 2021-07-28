import './Ticker.scss';
import { Component } from 'react';

class Ticker extends Component {

    render () {
        return (
            <section className='ticker__section'>
                <div class="ticker__wrap">
                    <div class="ticker">
                        <div class="ticker__item">🚨 Actively Looking For Work </div>
                        <div class="ticker__item">Recent BrainStation 🧠 Graduate</div>
                        <div class="ticker__item">Working on my own projects 💻 github.com/nick-albu</div>
                        <div class="ticker__item">Constantly learning 🤓</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Ticker;