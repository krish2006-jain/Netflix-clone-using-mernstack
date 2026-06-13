import { Route,Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/Footer";
import WatchPage from "./pages/WatchPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Loader } from "lucide-react";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import NotFoundPage from "./pages/404";
function App(){
  const {user,isCheckingAuth,authCheck} = useAuthStore();
  console.log("auth user in app.jsx",user);

  useEffect(()=>{
    authCheck();
  },[authCheck]);
	if (isCheckingAuth) {
		return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-black h-full'>
					<Loader className='animate-spin text-red-600 size-10' />
				</div>
			</div>
		);
	}
  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={!user ?<LoginPage/>:<Navigate to ={"/"}/>}/>
      <Route path='/signup' element={!user ?<SignupPage/>:<Navigate to ={"/"}/>}/>
      <Route path='/watch/:id' element={user ?<WatchPage/>:<Navigate to ={"/login"}/>}/>
      <Route path='/search' element={user ?<SearchPage/>:<Navigate to ={"/"}/>}/>
      <Route path='/history' element={user ?<SearchHistoryPage/>:<Navigate to ={"/"}/>}/>
     <Route path='/*' element={user ?<NotFoundPage/>:<Navigate to ={"/"}/>}/>
     </Routes>


     <Toaster/>
     <Footer/>
     </>
  );
}
export default App;