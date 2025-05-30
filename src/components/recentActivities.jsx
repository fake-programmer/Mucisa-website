import '../CSS-styling/recentActivities.css';
import gala1 from '../assets/gala1.jpg'
import gala2 from '../assets/gala2.jpg'
import gala3 from '../assets/gala3.jpg'
import gala4 from '../assets/gala4.jpg'
import gala5 from '../assets/gala5.jpg'
import wrric1 from '../assets/wrric1.jpeg'
import wrric2 from '../assets/wrric2.jpeg'
import wrric3 from '../assets/wrric3.jpeg'
import wrric5 from '../assets/wrric5.jpeg'
import hack1 from '../assets/hack1.jpeg'
import hack2 from '../assets/hack2.jpeg'
import hack3 from '../assets/hack3.jpeg'
import hack4 from '../assets/hack4.jpeg'
import hack5 from '../assets/hack5.jpeg'



const activities = [
  {
    title: "TechVibe Gala",
    description: "A productive night where members collaborated on real-world tech Experience and had lots of fun.",
    images: [
      gala1,
      gala2,
      gala3,
      gala4,
      gala5,
    ]
  },
  {
    title: "Mucisa Hackathon 2025",
    description: "Engaging session with experts discussing the impact of AI and how African developers can shape its future.",
    images: [
        hack5,
        hack1,
        hack2,
        hack3,
        hack4,
   
    ]
  },
  {
    title: "WRRIC 1st Edition hackathon",
    description: "  We have been able to excell in may of our activities, a Major highlight of the WRRIC 1st Edition Multidisciplinary HackathonHeld At Kisii University where we were able to emerge the winners in innovations and smart solutions, proudly presentent by our strong Teams Edyfra and the Enarctus KenyaTeams.",
    images: [
      wrric1,
        wrric2,
        wrric3,
        wrric5,

    ]
  }
];


const RecentActivities = () => {
  return (
    <div className="activities-wrapper">
        <h2 className="section-title">Recent Activities</h2>
      {activities.map((activity, index) => (
        <div key={index} className="activity-block">
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <div className="masonry-gallery">
            {activity.images.map((img, i) => (
              <img key={i} src={img} alt={activity & {i}} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;