import React from 'react'
import '../Styles/Main.css'

function Main() {
    return (
        <div>
            <main>
                <div className="back">
                    <h1>HR Innovation for streamlined success</h1>
                </div>

                <div className="seperation"></div>

                <div className="imgtext">
                    <div className="h"> Your partner for efficient, secure, and expertly managed HR processes.
                        <div>
                            <a href='/contact'> <button className='b'> Contact Us </button></a>
                        </div>
                    </div>
                    <img src="https://media.istockphoto.com/id/1420697156/photo/leadership-manager-and-team-leader.jpg?s=612x612&w=0&k=20&c=aWg34yOM1mU0RpmHQByWitJXbzLl4w6SUp893KoGjvI="
                        alt="" />
                </div>


                <div className="seperation"></div>


                <h2 className="shead"> Strategic growth support from an executive with experience.</h2>
                <div className="textimg">
                    <img src="https://366e203a.rocketcdn.me/wp-content/uploads/2020/11/employee-training.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, at asperiores. Laudantium atque
                        excepturi asperiores quae provident totam veritatis, porro corporis quasi in necessitatibus
                        adipisci hic ut repellat, eaque vero sunt libero qui debitis! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Expedita maxime dolorum eaque quod, ipsa saepe delectus, ipsum
                        doloremque inventore fuga iure id tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora ullam quo atque perspiciatis sint assumenda quae voluptatum, cupiditate dolores magni
                        aperiam! Obcaecati, inventore!</p>
                </div>



                <h2 className="fhead"> Industries in which we work </h2>
                <hr>
                </hr>

                <section className="first">
                    <div>
                        <span className="hf">Financial</span><br />
                        <span className="pf">Lorem ipsum dolor sit adipisicing Labore.</span>
                    </div>
                    <div className="secimg">
                        <img src="https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="" />
                    </div>
                </section>


                <section className="first">
                    <div className="secimg">
                        <img src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/TGBCMS/iy1ex3cookmf9cme5qlnxa.jpg"
                            alt="" />
                    </div>
                    <div>
                        <span className="hf">Social</span><br />
                        <span class="pf">Lorem ipsum dolor sit amet elit. Beatae.</span>
                    </div>
                </section>


                <section className="first">
                    <div>
                        <span className="hf">Marketing</span><br />
                        <span className="pf">Lorem ipsum dolor sit consectetur, elit. Officia!</span>
                    </div>
                    <div className="secimg">
                        <img src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/02/digital-marketing-2.jpg.webp"
                            alt="" />
                    </div>
                </section>


                <section className="first">
                    <div className="secimg">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
                            alt="" />
                    </div>
                    <div>
                        <span className="hf">Technology</span><br />
                        <span className="pf">Lorem ipsum dolor, sit amet elit expedita.</span>
                    </div>
                </section>
                <hr />

                <div className="backg">
                    <div className="ques">
                        <span> Have A Question? </span>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, ex maxime? Lorem
                            ipsum
                            dolor sit amet consectetur adipisicing.</span>
                        <div>
                            <a href='/contact'> <button className='but'> Contact Us </button></a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main
