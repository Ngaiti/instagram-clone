import { Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ImageGrid() {
    const posts = useSelector((state) => state.posts)

    //   const images = [
    //     "https://picsum.photos/id/123/500/500",
    //     "https://picsum.photos/id/124/500/500",
    //   ];

    const renderImages = () => {
        return posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
                <Image src={post.image} fluid />
            </Col>
        ));
    };

    return <Row>{renderImages()}</Row>;
}
