import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Offer = () => {
    const style = {
        h2: {
            marginTop: '100px',
            marginBottom: '50px',
            textAlign: 'center',
            color: 'blue'
        },
        /* h3: {
            textAlign: 'center'
        } */
    }
    return (
        <Container>
            <div>
                <h2 style={style.h2}>What Do We Offer</h2>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                        <h3 style={style.h3}>
                            {'\u2022'}  ২৪ ঘন্টা এ্যাম্বুলেন্স সার্ভিস সমগ্র বাংলাদেশব্যাপী
                            <br /><br />
                            {'\u2022'} শীতাতপ নিয়ন্ত্রিত এ্যাম্বুলেন্স সার্ভিস
                            <br /><br />
                            {'\u2022'} মৃতদেহ পরিবহন করা হয়
                            <br /><br />
                            {'\u2022'} ফ্রিজিং এ্যাম্বুলেন্স (লাশ পরিবহনের জন্য)
                            <br /><br />
                            {'\u2022'} লাইফ সার্পোট ও আধুনিক সরঞ্জাম সম্বলিত আই সি ইউ, সি সি ইউ, পি সি ইউ এ্যাম্বুলেন্স
                        </h3>
                    </Col>
                </Row>
            </div>
        </Container>

    );
};

export default Offer;