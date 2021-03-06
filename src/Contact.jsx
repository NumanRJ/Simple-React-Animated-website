import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container cantact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter your Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                                <label for="exampleFormControlInput1" class="form-label">Your Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Your Phone Number" />
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your Question</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3">Submit Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
