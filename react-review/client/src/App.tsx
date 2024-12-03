import PostList from "./components/PostList.tsx";
import MainHeader from "./components/MainHeader.tsx";
import {useState} from "react";


function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const hideModalHandler = () => {
        setModalVisible(false)
    }
    const showModalHandler = () => {
        setModalVisible(true)
    }
    return (
        <>
            <MainHeader onCreatePost={showModalHandler}></MainHeader>
            <main>
                <PostList isPosting={modalVisible} onStopPosting={hideModalHandler}></PostList>
            </main>
        </>
    )
}

export default App
