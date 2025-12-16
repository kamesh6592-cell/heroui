"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Input } from "@heroui/input";
import { Image } from "@heroui/image";
import { Avatar } from "@heroui/avatar";
import { Chip } from "@heroui/chip";
import { Progress } from "@heroui/progress";
import { Switch } from "@heroui/switch";
import { Badge } from "@heroui/badge";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Tabs, Tab } from "@heroui/tabs";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Divider } from "@heroui/divider";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-12">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>HeroUI&nbsp;</span>
          <span className={title({ color: "violet" })}>Component&nbsp;</span>
          <br />
          <span className={title()}>
            Showcase Demo
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library components in action.
          </div>
        </div>
      </section>

      <Divider className="mb-8" />

      {/* HeroUI Showcase Card */}
      <section className="mb-12 flex justify-center">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">HeroUI</p>
              <p className="text-small text-default-500">heroui.com</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </section>

      <Divider className="mb-8" />

      {/* Buttons Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button color="default">Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button variant="bordered" color="primary">Bordered</Button>
          <Button variant="light" color="primary">Light</Button>
          <Button variant="flat" color="primary">Flat</Button>
          <Button variant="ghost" color="primary">Ghost</Button>
          <Button variant="shadow" color="primary">Shadow</Button>
        </div>
      </section>

      <Divider className="mb-8" />

      {/* Cards Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Cards & Avatars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                size="md"
              />
              <div className="flex flex-col">
                <p className="text-md">John Doe</p>
                <p className="text-small text-default-500">Software Developer</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Badge content="99+" color="danger" shape="circle">
                <Button color="primary" onPress={onOpen}>
                  View Profile
                </Button>
              </Badge>
            </CardFooter>
          </Card>

          <Card className="max-w-[400px]">
            <CardHeader>
              <h4 className="text-lg font-bold">Progress & Chips</h4>
            </CardHeader>
            <CardBody className="space-y-4">
              <Progress label="Loading..." value={65} className="max-w-md" />
              <div className="flex gap-2 flex-wrap">
                <Chip color="primary">Frontend</Chip>
                <Chip color="success">React</Chip>
                <Chip color="warning">TypeScript</Chip>
                <Chip color="danger" variant="dot">New</Chip>
              </div>
              <Switch defaultSelected>Dark Mode</Switch>
            </CardBody>
          </Card>

          <Card className="max-w-[400px]">
            <CardHeader>
              <h4 className="text-lg font-bold">Contact Form</h4>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                labelPlacement="outside"
              />
              <Input
                type="text"
                label="Name"
                placeholder="Enter your name"
                labelPlacement="outside"
              />
              <Button color="primary" className="w-full">
                Submit
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>

      <Divider className="mb-8" />

      {/* Tabs & Accordion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tabs & Accordion</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Tabs aria-label="Options" color="primary" variant="bordered">
              <Tab key="photos" title="Photos">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Music">
                <Card>
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="videos" title="Videos">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
          
          <div>
            <Accordion variant="shadow">
              <AccordionItem key="1" aria-label="Getting Started" title="Getting Started">
                <p>
                  HeroUI is a modern React UI library that makes it easy to build
                  beautiful and responsive user interfaces.
                </p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Installation" title="Installation">
                <Snippet>npm install @heroui/react</Snippet>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Usage" title="Usage">
                <p>
                  Import components from <Code>@heroui/react</Code> and use them in
                  your React application.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Divider className="mb-8" />

      {/* Links Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">Learn More</h2>
        <div className="flex justify-center gap-4">
          <Link
            isExternal
            href="https://heroui.com"
            color="primary"
          >
            <GithubIcon size={20} />
            Documentation
          </Link>
          <Link
            isExternal
            href="https://github.com/heroui-inc/heroui"
            color="foreground"
          >
            GitHub Repository
          </Link>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">User Profile</ModalHeader>
              <ModalBody>
                <div className="flex items-center gap-4">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    size="lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">John Doe</h3>
                    <p className="text-default-500">Software Developer</p>
                    <Chip color="success" size="sm" className="mt-2">Active</Chip>
                  </div>
                </div>
                <p className="mt-4">
                  Experienced software developer with a passion for creating
                  beautiful user interfaces using modern React technologies.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Follow
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
