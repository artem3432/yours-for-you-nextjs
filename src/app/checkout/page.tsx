export default function Home() {
    return (
        <div className="md:flex flex-row-reverse p-8 bg-white">
            <div>
                <div>
                    <h2>Order</h2>
                </div>
                <div>
                    <div>
                        <p>Total</p>
                    </div>
                    <div>
                        Preis
                    </div>
                </div>//Flex
            </div>//Flex

            <div>
                <div>
                    <div>
                        <h2>Contrackt Info</h2>
                    </div>
                    <div>
                        <p>Email Address</p>
                    </div>//Flex
                    <div>
                        -------------
                    </div>//padding
                </div><hr />
                <div>
                    <div>
                        <h2>Shipping Address</h2>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <p>First name</p>
                                </div>
                                <div>
                                    <p>-----------</p>
                                </div>
                            </div>//Flex
                            <div>
                                <div>
                                    <p>Last name</p>
                                </div>
                                <div>
                                    <p>-----------</p>
                                </div>
                            </div>//Flex
                            <div>
                                <div>
                                    <p>Address line</p>
                                </div>
                                <div>
                                    <p>-----------</p>
                                </div>
                            </div>//Flex
                        </div>//Flex
                    </div>//Flex
                    <div>
                        <div>
                            <div>
                                <p>Country</p>
                            </div>
                            <div>
                                <p>-----------</p>
                            </div>
                        </div>//Flex
                        <div>
                            <div>
                                <p>Postal Code</p>
                            </div>
                            <div>
                                <p>-----------</p>
                            </div>
                        </div>//Flex
                        <div>
                            <div>
                                <p>City</p>
                            </div>
                            <div>
                                <p>-----------</p>
                            </div>
                        </div>//Flex
                        <div>
                            <div>
                                <p>Region</p>
                            </div>
                            <div>
                                <p>-----------</p>
                            </div>
                        </div>//Flex
                    </div>//Flex
                </div>//grid <hr />
                <div>
                    <div>
                        <h2>Shipping Method</h2>
                    </div>
                    <div>
                        <div>
                            <p>International</p>
                        </div>
                        <div>
                            <p>Preis</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button>Continue to Payment</button>
                </div>
            </div>
        </div>
    );
}