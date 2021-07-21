import './Ticker.scss';
import { Component } from 'react';

class Ticker extends Component {

    render () {
        return (
            <section className='ticker__section'>
                <div class="ticker__wrap">
                    <div class="ticker">
                        <div class="ticker__item">Local Web Developer Seeking Work 👀</div>
                        <div class="ticker__item">⛈ 95% Chance Of Job Offers ⛈</div>
                        <div class="ticker__item">Gemini Stocks 💹 At All Time High</div>
                        <div class="ticker__item">Web Developer Saves Kitten 🐈 From Burning Car 🚗🔥, Hero</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Ticker;