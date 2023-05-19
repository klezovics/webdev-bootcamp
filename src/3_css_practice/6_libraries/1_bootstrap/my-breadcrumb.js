import {Breadcrumb} from "react-bootstrap";

const MyBreadcrumb = () => (
    <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
            Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
)

export default MyBreadcrumb;