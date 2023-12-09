import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { default as DashboardLayout } from './pages/DashboardLayout';
import { default as AddTask } from './pages/AddTask'
import { default as Error } from './pages/Error';
import { default as HomeLayout } from './pages/HomeLayout';
import { default as Landingpage } from './pages/Landingpage';
import EditTask from './pages/EditTask';
import AllTasks from './pages/AllTasks';
import Register from './pages/Register';
import { action as registerAction } from './pages/Register.jsx'
import { action as landingAction } from './pages/Landingpage.jsx'
import { action as addTaskAction } from './pages/AddTask.jsx'
import { loader as dashboardLoader } from './pages/DashboardLayout.jsx'
import { loader as allTasksLoader } from './pages/AllTasks.jsx'
import { loader as editTaskLoader } from './pages/EditTask.jsx'
import { action as editTaskAction } from './pages/EditTask.jsx'
import { action as deleteTaskAction } from './pages/DeleteTask.jsx'
import { action as completeTaskAction } from './pages/CompleteTask.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landingpage />,
        action: landingAction
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction
      },
      {
        path: 'tasks',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddTask />,
            action: addTaskAction
          },
          {
            path: 'all-tasks',
            element: <AllTasks />,
            loader: allTasksLoader
          },
          {
            path: 'edit-task/:id',
            element: <EditTask />,
            action: editTaskAction,
            loader: editTaskLoader
          }, {
            path: 'delete-task/:id',
            action: deleteTaskAction
          },
          {
            path: 'complete-task/:id',
            action: completeTaskAction
          }

        ]

      }
    ]
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
