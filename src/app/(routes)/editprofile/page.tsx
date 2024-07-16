"use client";

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Map,
  Users2,
  Share2,
  LogOut,
  PanelLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

interface Profile {
  linkedinUrl: string;
  ventureName: string;
  bio: string;
  profilePictureUrl: string;
}

export default function Editprofile() {
  const [profile, setProfile] = useState<Profile>({
    linkedinUrl: "",
    ventureName: "",
    bio: "",
    profilePictureUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/auth/profile")
      .then((response) => setProfile(response.data))
      .catch((error) => setError(error.message));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };
  const router = useRouter()
  const handlelogut = () =>{

    try {
      axios.post("/api/v1/auth/logout");

      router.push("/")
    } catch (error) {
      console.log("Logout error:", error);
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("linkedinUrl", profile.linkedinUrl);
    formData.append("ventureName", profile.ventureName);
    formData.append("bio", profile.bio);
    formData.append("profilePicture", profile.profilePictureUrl);
    try {
      await axios.put("/api/v1/auth/profile", formData);
    } catch (error:any) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-16 md:w-24 lg:w-32 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center justify-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Image src="/Vector.svg" alt="Logo" width={36} height={36} />
            <span className="sr-only">Vcatalyst</span>
          </Link>

          {[
            { href: "/dashboard", icon: Home, label: "Dashboard" },
            { href: "/roadmap", icon: Map, label: "Roadmap" },
            { href: "/explore", icon: Users2, label: "Explore" },
            { href: "/share", icon: Share2, label: "Share" },
            { href: "/editprofile", icon: "/user-pen.svg", label: "Profile" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {typeof item.icon === "string" ? (
                <Image
                  src={item.icon}
                  className="h-5 w-5"
                  alt=""
                  height={30}
                  width={30}
                />
              ) : (
                <item.icon className="h-5 w-5" />
              )}
              <span className="text-xs md:text-sm group-hover:text-foreground hidden md:inline">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <nav onClick={handlelogut} className="mt-auto flex flex-col items-center justify-center gap-4 px-2 py-4">
          <Link
            href="/settings"
            className="group flex flex-col items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <LogOut className="h-5 w-5" />
            <span className="text-xs md:text-sm group-hover:text-foreground hidden md:inline">
              Logout
            </span>
          </Link>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-20 md:pl-28 lg:pl-36">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[200px] sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Image
                    src="/vector.svg"
                    height={30}
                    width={40}
                    alt=""
                    className="h-5 w-5 transition-all group-hover:scale-110"
                  />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                {[
                  { href: "/dashboard", icon: Home, label: "Dashboard" },
                  { href: "/roadmap", icon: Map, label: "Roadmap" },
                  { href: "/explore", icon: Users2, label: "Explore" },
                  { href: "/share", icon: Share2, label: "Share" },
                  { href: "/editprofile", icon: "/user-pen.svg", label: "Profile" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    {typeof item.icon === "string" ? (
                      <Image
                        src={item.icon}
                        className="h-5 w-5"
                        alt=""
                        height={30}
                        width={30}
                      />
                    ) : (
                      <item.icon className="h-5 w-5" />
                    )}
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex flex-col items-center px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-3xl">
            <div className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    {profile.profilePictureUrl ? (
                      <Image
                        src={profile.profilePictureUrl}
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-white shadow-sm"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
                    )}
                    <input
                      type="file"
                      name="profilePicture"
                      onChange={handleChange}
                      className="mt-4 w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <label
                        htmlFor="linkedinUrl"
                        className="block text-gray-700 mb-1"
                      >
                        Linkedin URL
                      </label>
                      <Input
                        type="text"
                        id="linkedinUrl"
                        placeholder={profile.linkedinUrl}
                        name="linkedinUrl"
                        value={profile.linkedinUrl}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-200 rounded border text-black border-gray-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ventureName"
                        className="block text-gray-700 mb-1"
                      >
                        Founder @
                      </label>
                      <Input
                        type="text"
                        id="ventureName"
                        name="ventureName"
                        value={profile.ventureName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-200 rounded border border-gray-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="bio" className="block text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-200 rounded border border-gray-300"
                        style={{ height: "150px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    type="submit"
                    variant="outline"
                    className="bg-black text-white"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save'}
                  </Button>
                </div>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}