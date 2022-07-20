import './Ticker.scss';
import { Component } from 'react';

class Ticker extends Component {

    render () {
        return (
            <section className='ticker'>
                <div class="ticker__wrap">
                    <div class="ticker__itemContainer">
                        <div class="ticker__item"><p className='ticker__itemText'>🚨 Actively looking for Full-Time or Contract work</p></div>
                        <div class="ticker__item"><p className='ticker__itemText'>🥞 Working on Frontend and Backend learning at the moment </p></div>
                        <div class="ticker__item"><p className='ticker__itemText'>💻 github.com/nick-albu</p></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Ticker;