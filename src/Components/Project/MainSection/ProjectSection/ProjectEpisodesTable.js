import { Button, Card, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const TABLE_HEAD = ["Name", "Upload Date & Time", "Status", "Action"];



function ProjectEpisodesTable() {

  const episodes = useSelector(store=>store.episodes)

  return (
    // table to show all episode based on project 
    <Card className="h-full w-full overflow-auto">
      <table className="w-full min-w-max  text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {episodes?.map(({ name, job, date }, index) => {
            const classes = "p-4 border-b border-blue-gray-100";

            return (
              <tr key={name} className="text-center">
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {date}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50 flex gap-2 text-center justify-center`}>
                  <NavLink to='/project/transcript/1'>
                    <Button variant="outlined" className="py-2 px-4">Edit</Button>
                  </NavLink>
                  <Button variant="outlined" className="py-2 px-4 text-red-600">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default ProjectEpisodesTable