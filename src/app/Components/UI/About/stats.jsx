import {Globe, Building2, PackageCheck, Users2} from "lucide-react";

const stats = [
  {
    icon: <Globe size={36} className="text-white" />,
    value: "18",
    label: "Countries Served",
  },
  {
    icon: <Building2 size={36} className="text-white" />,
    value: "67",
    label: "Companies Empowered",
  },
  {
    icon: <PackageCheck size={36} className="text-white" />,
    value: "10",
    label: "SaaS Products Built",
  },
  {
    icon: <Users2 size={36} className="text-white" />,
    value: "200+",
    label: "Clients Served",
  },
];

export default function CompanyStats() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold">Our Impact in Numbers</h2>
        <p className="text-[#b0b0b0] max-w-2xl mx-auto text-lg">From global outreach to SaaS innovation, here’s how Cyanu is making a difference.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({icon, value, label}, idx) => (
            <div key={idx} className="group bg-[#0d0d0d] border border-[#cabb67] rounded-xl p-6 flex flex-col items-center justify-center space-y-3  hover:scale-110">
              {icon}
              <h3 className="text-4xl font-bold text-[#cabb67]">{value}</h3>
              <p className="text-[#b0b0b0] text-center text-lg">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
