import React from "react";

import { Img, Text, Line, Button, List, Input, CheckBox } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-sulphurpoint items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <aside className="bg-gray_900 flex flex-col md:hidden justify-start md:px-5 shadow-bs w-[252px]">
              <div className="flex flex-col md:gap-10 gap-[77px] items-center justify-start my-[60px] w-full">
                <div className="flex flex-row gap-2.5 items-end justify-center w-[47%] md:w-full">
                  <Img
                    src="images/img_fire.svg"
                    className="h-8 w-[33px]"
                    alt="fire"
                  />
                  <Text
                    className="mt-1.5 text-gray_50 text-left w-auto"
                    variant="body1"
                  >
                    Realply
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start pr-[5px] py-[5px] w-full">
                    <Line className="bg-deep_purple_100 h-[30px] w-[5px]" />
                    <Img
                      src="images/img_grid.svg"
                      className="h-5 ml-[55px] mt-[5px] w-5"
                      alt="grid"
                    />
                    <Text
                      className="font-bold ml-[15px] mt-1 text-deep_purple_100 text-left w-auto"
                      variant="body4"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-center mt-2.5 p-2 w-full">
                    <Img
                      src="images/img_car.svg"
                      className="h-5 mb-1 ml-[52px] w-5"
                      alt="car"
                    />
                    <Text
                      className="font-bold mr-[71px] mt-[3px] text-gray_50 text-left w-auto"
                      variant="body4"
                    >
                      Messages
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-center mt-2.5 p-2.5 w-full">
                    <Img
                      src="images/img_mobile.svg"
                      className="h-5 ml-[50px] w-5"
                      alt="mobile"
                    />
                    <Text
                      className="font-bold mr-[73px] text-gray_50 text-left w-auto"
                      variant="body4"
                    >
                      Calendar
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-center mt-2.5 p-2 w-full">
                    <Img
                      src="images/img_reply.svg"
                      className="h-5 ml-[51px] w-5"
                      alt="reply"
                    />
                    <Text
                      className="font-bold mr-[60px] text-gray_50 text-left w-auto"
                      variant="body4"
                    >
                      Campaigns
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-center mt-[114px] p-2 w-full">
                    <Img
                      src="images/img_clock.svg"
                      className="h-5 ml-[51px] w-5"
                      alt="clock"
                    />
                    <Text
                      className="font-bold mr-[86px] text-gray_50 text-left w-auto"
                      variant="body4"
                    >
                      Settings
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-center mt-2.5 p-2 w-full">
                    <Img
                      src="images/img_warning.svg"
                      className="h-5 ml-[51px] w-5"
                      alt="warning"
                    />
                    <Text
                      className="font-bold mr-[104px] text-gray_50 text-left w-auto"
                      variant="body4"
                    >
                      Help?
                    </Text>
                  </div>
                  <div className="flex items-center justify-start mt-10 w-[77%] md:w-full">
                    <div className="border border-deep_purple_100 border-solid flex flex-col items-center justify-end p-5 rounded-[24px] w-full">
                      <div className="flex font-roboto items-center justify-start mt-[5px] w-auto md:w-full">
                        <Text
                          className="text-gray_50 text-left"
                          variant="body2"
                        >
                          Your free trial is about to end in 
                          10 days.
                        </Text>
                      </div>
                      <Text
                        className="font-normal font-sulphurpoint leading-[13.00px] mt-2.5 not-italic text-deep_purple_100 text-left w-full"
                        variant="body6"
                      >
                        You will not be billed during your free trial.To keep
                        your projects running after the trial end, upgrade to a
                        paid option.
                      </Text>
                      <div className="flex font-roboto items-center justify-start mt-5 w-[97%] md:w-full">
                        <Button
                          className="cursor-pointer font-bold min-w-[146px] text-center text-gray_50 text-sm w-auto"
                          shape="RoundedBorder10"
                          size="md"
                          variant="OutlineDeeppurple100"
                        >
                          Upgrade
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-center mt-10 p-[9px] w-full">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-5 mb-0.5 ml-[69px] w-5"
                      alt="arrowleft"
                    />
                    <Text
                      className="font-bold mr-[69px] mt-0.5 text-gray_50 text-left w-auto"
                      variant="body4"
                    >
                      Log out
                    </Text>
                  </div>
                </div>
              </div>
            </aside>
            <div className="bg-gray_50 flex flex-1 items-end justify-start p-5 md:px-5 w-full">
              <div className="flex flex-col items-start justify-start mb-12 mt-[34px] w-[95%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[113px] items-start justify-start md:ml-[0] ml-[18px] w-[85%] md:w-full">
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Dashboard
                  </Text>
                  <List
                    className="flex-col gap-[15px] grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-auto"
                            variant="body4"
                          >
                            Connections
                          </Text>
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="flex font-rubik items-center justify-start w-auto">
                              <div className="flex items-center justify-start w-full">
                                <div className="flex items-center justify-start w-full">
                                  <div className="flex items-center justify-start w-full">
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-auto"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2632
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[69px] my-0.5 w-auto"
                              leftIcon={
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="mt-px mr-1.5"
                                  alt="checkmark"
                                />
                              }
                              shape="RoundedBorder10"
                              size="sm"
                              variant="FillGreen50"
                            >
                              <div className="font-bold font-sulphurpoint text-base text-gray_600 text-left">
                                56%
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_200 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-1 flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-auto"
                            variant="body4"
                          >
                            Followers
                          </Text>
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="flex font-rubik items-center justify-start w-auto">
                              <div className="flex items-center justify-start w-full">
                                <div className="flex items-center justify-start w-full">
                                  <div className="flex items-center justify-start w-full">
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-auto"
                                      as="h6"
                                      variant="h6"
                                    >
                                      2667
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[69px] my-0.5 w-auto"
                              leftIcon={
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="mt-px mr-3"
                                  alt="checkmark"
                                />
                              }
                              shape="RoundedBorder10"
                              size="sm"
                              variant="FillGreen50"
                            >
                              <div className="font-bold font-sulphurpoint text-base text-gray_600 text-left">
                                0%
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_200 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-1 items-center justify-start w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-auto"
                            variant="body4"
                          >
                            Connect Invites
                          </Text>
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="flex font-rubik items-center justify-start w-auto">
                              <div className="flex items-center justify-start w-full">
                                <div className="flex items-center justify-start w-full">
                                  <div className="flex items-center justify-start w-full">
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-auto"
                                      as="h6"
                                      variant="h6"
                                    >
                                      100
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[69px] my-0.5 w-auto"
                              leftIcon={
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="mt-px mr-[5px]"
                                  alt="checkmark"
                                />
                              }
                              shape="RoundedBorder10"
                              size="sm"
                              variant="FillGreen50"
                            >
                              <div className="font-bold font-sulphurpoint text-base text-gray_600 text-left">
                                60%
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex font-rubik items-center justify-start mt-[97px] w-[95%] md:w-full">
                  <div className="flex items-center justify-start w-full">
                    <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                      <div className="flex flex-col items-start justify-start mt-5 w-auto">
                        <Text
                          className="font-normal not-italic text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          800
                        </Text>
                        <Text
                          className="font-normal mt-[25px] not-italic text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          700
                        </Text>
                        <Text
                          className="font-normal mt-[25px] not-italic text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          600
                        </Text>
                        <Text
                          className="font-normal mt-[25px] not-italic text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          500
                        </Text>
                        <Text
                          className="font-normal mt-[25px] not-italic text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          400
                        </Text>
                        <Text
                          className="font-normal mt-[25px] not-italic text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          300
                        </Text>
                        <Text
                          className="font-normal mt-[25px] not-italic text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          200
                        </Text>
                        <Text
                          className="font-normal ml-0.5 md:ml-[0] mt-[25px] not-italic text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          100
                        </Text>
                        <Text
                          className="font-medium ml-3.5 md:ml-[0] mt-[21px] text-gray_500 text-right w-auto"
                          variant="body6"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-0.5 w-[90%]">
                        <div className="h-[348px] relative w-full">
                          <div className="h-[348px] m-auto w-full">
                            <div className="absolute flex h-full inset-[0] items-center justify-center m-auto w-full">
                              <div className="flex flex-row items-start justify-evenly w-full">
                                <Line className="bg-gray_500 h-[348px] w-px" />
                                <div className="flex flex-1 flex-col gap-[39px] items-center justify-start mt-[268px] w-full">
                                  <Line className="bg-gray_500_4c h-px w-full" />
                                  <Line className="bg-gray_500_4c h-px w-full" />
                                </div>
                              </div>
                            </div>
                            <Line className="absolute bg-gray_500_4c bottom-[34%] h-px inset-x-[0] mx-auto w-full" />
                            <Line className="absolute bg-gray_500_4c h-px inset-x-[0] mx-auto top-[31%] w-full" />
                            <Line className="absolute bg-gray_500_4c bottom-[46%] h-px inset-x-[0] mx-auto w-full" />
                            <Line className="absolute bg-gray_500_4c h-px inset-x-[0] mx-auto top-[20%] w-full" />
                            <Line className="absolute bg-gray_500_4c h-px inset-x-[0] mx-auto top-[43%] w-full" />
                          </div>
                          <Line className="absolute bg-gray_500_4c h-px inset-x-[0] mx-auto top-[8%] w-full" />
                          <div className="absolute bg-green_100 bottom-[0] h-[175px] left-[5%] w-[28%]"></div>
                          <div className="absolute bg-indigo_100 bottom-[0] h-[300px] right-[7%] w-[28%]"></div>
                          <div className="absolute bg-gray_901 bottom-[0] h-[115px] inset-x-[0] mx-auto w-[28%]"></div>
                        </div>
                        <Line className="bg-gray_500 h-px w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-sulphurpoint gap-[15px] items-center justify-end ml-auto mt-9 w-[95%] md:w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-[58%]">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[55%]">
                      <div className="bg-green_100 h-[18px] rounded-[5px] w-[18px]"></div>
                      <Text
                        className="font-bold text-gray_900 text-left w-auto"
                        variant="body5"
                      >
                        Connections
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[38%]">
                      <div className="bg-gray_901 h-[18px] rounded-[5px] w-[18px]"></div>
                      <Text
                        className="font-bold text-gray_900 text-left w-auto"
                        variant="body5"
                      >
                        Follows
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[39%]">
                    <div className="bg-indigo_100 h-[18px] rounded-[5px] w-[18px]"></div>
                    <Text
                      className="font-bold text-gray_900 text-left w-auto"
                      variant="body5"
                    >
                      Connect Invites
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-end justify-start md:mt-0 mt-[51px] md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full">
                <Input
                  wrapClassName="flex md:mt-0 mt-4 w-[46%] md:w-full"
                  className="font-normal not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-lg w-full"
                  name="frameNineteen"
                  placeholder="Search"
                  suffix={
                    <Img
                      src="images/img_refresh.svg"
                      className="mt-px mb-auto ml-[35px]"
                      alt="refresh"
                    />
                  }
                  shape="RoundedBorder10"
                  size="sm"
                  variant="FillGray50"
                ></Input>
                <Button
                  className="flex h-[45px] items-center justify-center mb-[13px] md:ml-[0] ml-[139px] w-[45px]"
                  shape="icbRoundedBorder22"
                  size="mdIcn"
                  variant="icbFillGray20063"
                >
                  <Img
                    src="images/img_clock_gray_900.svg"
                    className="h-5"
                    alt="clock_One"
                  />
                </Button>
                <div className="flex flex-row gap-[15px] items-center justify-between mb-[13px] ml-5 md:ml-[0] w-[27%] md:w-full">
                  <Img
                    src="images/img_ellipse4.png"
                    className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                    alt="ellipseFour"
                  />
                  <div className="flex items-center justify-start w-auto">
                    <Text
                      className="text-gray_900 text-left w-auto"
                      variant="body3"
                    >
                      Jacob Frost
                    </Text>
                  </div>
                  <Img
                    src="images/img_checkmark_gray_900.svg"
                    className="h-[18px] w-[18px]"
                    alt="checkmark"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[37px] items-start justify-start mt-[100px] w-[86%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-bold text-gray_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Campaign Analytics
                  </Text>
                  <div className="bg-gray_200_7f flex sm:flex-1 flex-row gap-2.5 items-start justify-evenly p-[5px] rounded-lg w-auto sm:w-full">
                    <Img
                      src="images/img_car_gray_900.svg"
                      className="h-[18px] w-[18px]"
                      alt="car_One"
                    />
                    <Text
                      className="font-normal mt-1 not-italic text-gray_900 text-left w-auto"
                      variant="body5"
                    >
                      Mar 10 - Apr 10
                    </Text>
                    <Img
                      src="images/img_checkmark_gray_900.svg"
                      className="h-3.5 mt-[3px] w-3.5"
                      alt="checkmark_One"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[71%] md:w-full">
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[24%] sm:w-full">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-auto"
                      variant="body4"
                    >
                      Invitations sent
                    </Text>
                    <div className="flex font-rubik items-center justify-start w-[45%] md:w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex items-center justify-start w-full">
                          <div className="flex items-center justify-start w-full">
                            <Text
                              className="font-normal not-italic text-gray_900 text-left w-auto"
                              as="h6"
                              variant="h6"
                            >
                              286
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start ml-16 sm:ml-[0] w-[30%] sm:w-full">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-auto"
                      variant="body4"
                    >
                      Pending Invitations
                    </Text>
                    <div className="flex font-rubik items-center justify-start mt-[3px] w-1/5 md:w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex items-center justify-start w-full">
                          <div className="flex items-center justify-start w-full">
                            <Text
                              className="font-normal not-italic text-gray_900 text-left w-auto"
                              as="h6"
                              variant="h6"
                            >
                              12
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-start justify-start sm:ml-[0] ml-[66px] w-[21%] sm:w-full">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-auto"
                      variant="body4"
                    >
                      Profile views
                    </Text>
                    <div className="flex font-rubik items-center justify-start w-[64%] md:w-full">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex items-center justify-start w-full">
                          <div className="flex items-center justify-start w-full">
                            <Text
                              className="font-normal not-italic text-gray_900 text-left w-auto"
                              as="h6"
                              variant="h6"
                            >
                              2891
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-roboto md:gap-10 gap-[63px] items-end justify-start mt-[59px] w-[84%] md:w-full">
                <div className="flex flex-col gap-[29px] items-center justify-start md:mt-0 mt-6 w-[53%] md:w-full">
                  <div className="h-[211px] relative w-[211px]">
                    <div classname="!w-[211px] h-[211px] m-auto overflow-visible">
                      <CircularProgressbar
                        className="!w-[211px] h-[211px] m-auto overflow-visible"
                        value={30}
                        strokeWidth={20}
                        styles={{
                          trail: { strokeWidth: 20, stroke: "#c2ecc1" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(-19deg)",
                            stroke: "#c5c7f6",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                    <div classname="!w-[211px] absolute h-[211px] inset-[0] justify-center m-auto overflow-visible">
                      <CircularProgressbar
                        className="!w-[211px] absolute h-[211px] inset-[0] justify-center m-auto overflow-visible"
                        value={29}
                        strokeWidth={20}
                        styles={{
                          trail: { strokeWidth: 20, stroke: "#c2ecc1" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(233deg)",
                            stroke: "#1f1f1f",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start md:px-10 sm:px-5 px-[47px] w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-center w-[31%]">
                      <Img
                        src="images/img_contrast.svg"
                        className="h-[11px] w-[11px]"
                        alt="contrast"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-3/4">
                        <Text
                          className="text-black_900_60 text-left w-auto"
                          as="h2"
                          variant="h2"
                        >
                          Invitations sent
                        </Text>
                        <div className="flex items-start justify-start w-auto md:w-full">
                          <Text
                            className="text-black_900_dd text-left w-auto"
                            variant="body7"
                          >
                            286
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[9px] items-start justify-center ml-4 w-[36%]">
                      <Img
                        src="images/img_save.svg"
                        className="h-[11px] w-[11px]"
                        alt="save"
                      />
                      <div className="flex flex-col items-start justify-start w-[79%]">
                        <Text
                          className="text-black_900_60 text-left w-auto"
                          as="h2"
                          variant="h2"
                        >
                          Pending invitations
                        </Text>
                        <div className="flex items-start justify-start mt-1 w-auto md:w-full">
                          <Text
                            className="text-black_900_dd text-left w-auto"
                            variant="body7"
                          >
                            12
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[9px] items-start justify-center ml-0.5 w-[27%]">
                      <Img
                        src="images/img_save_indigo_100.svg"
                        className="h-[11px] w-[11px]"
                        alt="save_One"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[72%]">
                        <Text
                          className="text-black_900_60 text-left w-auto"
                          as="h2"
                          variant="h2"
                        >
                          Profile views
                        </Text>
                        <div className="flex items-start justify-start w-auto md:w-full">
                          <Text
                            className="text-black_900_dd text-left w-auto"
                            variant="body7"
                          >
                            2891
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-center justify-start w-[39%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col relative w-[10%]">
                      <Text
                        className="mx-auto not-italic text-black_900_99 text-left w-auto"
                        as="h3"
                        variant="h3"
                      >
                        January
                      </Text>
                      <Text
                        className="bg-gray_51 flex h-2 items-center justify-center mt-[-0.78px] mx-auto not-italic text-black_900_60 text-center w-2 z-[1]"
                        as="h3"
                        variant="h3"
                      >
                        90
                      </Text>
                    </div>
                    <div className="md:h-[203px] h-[230px] relative w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col inset-[0] justify-center m-auto pb-0.5 px-0.5 w-[230px]"
                        style={{
                          backgroundImage: "url('images/img_group2.svg')",
                        }}
                      >
                        <div className="flex md:h-[203px] h-[218px] justify-end mx-auto w-[97%]">
                          <div
                            className="bg-cover bg-no-repeat flex h-full items-center justify-end mb-0.5 mt-auto mx-auto p-3.5 w-[201px]"
                            style={{
                              backgroundImage: "url('images/img_group2.svg')",
                            }}
                          >
                            <div
                              className="bg-cover bg-no-repeat flex h-[172px] items-center justify-start p-3.5 w-[172px]"
                              style={{
                                backgroundImage: "url('images/img_group2.svg')",
                              }}
                            >
                              <div
                                className="bg-cover bg-no-repeat flex h-36 items-center justify-end p-3.5 w-36"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group2.svg')",
                                }}
                              >
                                <div
                                  className="bg-cover bg-no-repeat flex h-[115px] items-center justify-start p-3.5 w-[115px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group2.svg')",
                                  }}
                                >
                                  <div
                                    className="bg-cover bg-no-repeat flex h-[86px] items-center justify-start p-3.5 w-[86px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group8.svg')",
                                    }}
                                  >
                                    <div
                                      className="bg-cover bg-no-repeat flex h-[57px] items-center justify-end p-3.5 w-[57px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group8.svg')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_group8.svg"
                                        className="h-7 w-7"
                                        alt="settings_One"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col inset-[0] justify-center m-auto p-[3px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group3.svg')",
                            }}
                          >
                            <div className="md:h-[159px] h-[188px] ml-1 w-[188px]">
                              <div className="absolute flex flex-col gap-[5px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                                <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[100px] w-auto md:w-full">
                                  <Text
                                    className="bg-gray_51 flex h-2 items-center justify-center not-italic text-black_900_60 text-center w-2"
                                    as="h3"
                                    variant="h3"
                                  >
                                    80
                                  </Text>
                                  <Text
                                    className="bg-gray_51 flex h-2 items-center justify-center not-italic text-black_900_60 text-center w-2"
                                    as="h3"
                                    variant="h3"
                                  >
                                    70
                                  </Text>
                                </div>
                                <div className="md:h-[113px] h-[133px] relative w-full">
                                  <div className="absolute flex flex-col justify-start left-[0] top-[2%] w-[58%]">
                                    <Text
                                      className="mr-[95px] not-italic text-black_900_99 text-left w-auto"
                                      as="h3"
                                      variant="h3"
                                    >
                                      July
                                    </Text>
                                    <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[100px] mt-0.5 w-[8%] md:w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="bg-gray_51 flex h-2 items-start justify-start w-2">
                                          <Text
                                            className="not-italic text-black_900_60 text-left w-auto"
                                            as="h3"
                                            variant="h3"
                                          >
                                            50
                                          </Text>
                                        </div>
                                        <div className="bg-gray_51 flex h-2 items-start justify-start mt-[5px] w-2">
                                          <Text
                                            className="not-italic text-black_900_60 text-left w-auto"
                                            as="h3"
                                            variant="h3"
                                          >
                                            40
                                          </Text>
                                        </div>
                                        <div className="bg-gray_51 flex h-2 items-start justify-start mt-[5px] w-2">
                                          <Text
                                            className="not-italic text-black_900_60 text-left w-auto"
                                            as="h3"
                                            variant="h3"
                                          >
                                            30
                                          </Text>
                                        </div>
                                        <div className="bg-gray_51 flex h-2 items-start justify-start mt-[5px] w-2">
                                          <Text
                                            className="not-italic text-black_900_60 text-left w-auto"
                                            as="h3"
                                            variant="h3"
                                          >
                                            20
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="bg-gray_51 flex items-start justify-start rounded-sm w-2 md:w-full">
                                        <Text
                                          className="not-italic text-black_900_60 text-left w-auto"
                                          as="h3"
                                          variant="h3"
                                        >
                                          10
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-gray_51 flex h-2 items-start justify-start right-[42%] top-[0] w-2">
                                    <Text
                                      className="not-italic text-black_900_60 text-left w-auto"
                                      as="h3"
                                      variant="h3"
                                    >
                                      60
                                    </Text>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[113px] inset-x-[0] items-start justify-start mx-auto p-[5px] w-[97%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group11.svg')",
                                    }}
                                  >
                                    <div className="flex flex-col md:gap-10 gap-[65px] justify-start mb-[33px] md:ml-[0] ml-[21px] w-[42%] md:w-full">
                                      <div className="flex flex-row items-center justify-between w-full">
                                        <div className="bg-indigo_100 h-0.5 rounded-[50%] w-0.5"></div>
                                        <div className="bg-indigo_100 h-0.5 rounded-[50%] w-0.5"></div>
                                      </div>
                                      <div className="bg-indigo_100 h-0.5 ml-16 md:ml-[0] mr-[5px] rounded-[50%] w-0.5"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bg-indigo_100 h-0.5 right-[3%] rounded-[50%] top-[26%] w-0.5"></div>
                              <div className="absolute bg-indigo_100 bottom-[29%] h-0.5 left-[3%] rounded-[50%] w-0.5"></div>
                              <div className="absolute bg-indigo_100 bottom-[13%] h-0.5 right-[31%] rounded-[50%] w-0.5"></div>
                              <div className="absolute bg-indigo_100 bottom-[30%] h-0.5 right-[0] rounded-[50%] w-0.5"></div>
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[162px] inset-x-[0] justify-center mx-auto p-3 w-[67%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group10.svg')",
                                }}
                              >
                                <div className="bg-green_100 h-0.5 mr-[97px] mt-[27px] rounded-[50%] w-0.5"></div>
                                <div className="bg-green_100 h-0.5 md:ml-[0] ml-[77px] mr-[19px] mt-6 rounded-[50%] w-0.5"></div>
                                <div className="bg-green_100 h-0.5 mb-[50px] md:ml-[0] ml-[62px] mr-[34px] mt-7 rounded-[50%] w-0.5"></div>
                              </div>
                            </div>
                            <div className="bg-green_100 h-0.5 mt-[-NaNpx] mx-auto rounded-[50%] w-0.5 z-[1]"></div>
                            <div className="bg-green_100 h-0.5 mb-[83px] ml-[37px] mt-[-NaNpx] rounded-[50%] w-0.5 z-[1]"></div>
                            <div className="bg-green_100 h-0.5 mb-[21px] ml-[69px] mt-[-0.72px] rounded-[50%] w-0.5 z-[1]"></div>
                            <div className="bg-green_100 h-0.5 mb-[86px] ml-auto mr-[51px] mt-[-NaNpx] rounded-[50%] w-0.5 z-[1]"></div>
                          </div>
                        </div>
                        <Text
                          className="ml-auto mr-[47px] mt-[-0.12px] not-italic text-black_900_99 text-left w-auto z-[1]"
                          as="h3"
                          variant="h3"
                        >
                          April
                        </Text>
                        <Text
                          className="ml-[51px] mt-[-NaNpx] not-italic text-black_900_99 text-left w-auto z-[1]"
                          as="h3"
                          variant="h3"
                        >
                          May
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[38%] left-[0] not-italic text-black_900_99 text-left w-auto"
                        as="h3"
                        variant="h3"
                      >
                        June
                      </Text>
                      <Text
                        className="absolute not-italic right-[5%] text-black_900_99 text-left top-[16%] w-auto"
                        as="h3"
                        variant="h3"
                      >
                        February
                      </Text>
                      <Text
                        className="absolute bottom-[38%] not-italic right-[0] text-black_900_99 text-left w-auto"
                        as="h3"
                        variant="h3"
                      >
                        March
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[25px] grid grid-cols-2 justify-center w-[64%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                      <Img
                        src="images/img_camera.svg"
                        className="h-[11px] w-[11px]"
                        alt="camera"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-black_900_60 text-left w-auto"
                          as="h2"
                          variant="h2"
                        >
                          Campaign 1
                        </Text>
                        <div className="flex items-center justify-start mt-1 w-auto md:w-full">
                          <Text
                            className="text-black_900_dd text-left w-auto"
                            variant="body7"
                          >
                            12,423
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                      <Img
                        src="images/img_camera_indigo_100.svg"
                        className="h-[11px] w-[11px]"
                        alt="camera"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-black_900_60 text-left w-auto"
                          as="h2"
                          variant="h2"
                        >
                          Campaign 2
                        </Text>
                        <div className="flex items-center justify-start mt-1 w-auto md:w-full">
                          <Text
                            className="text-black_900_dd text-left w-auto"
                            variant="body7"
                          >
                            12,423
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="bg-white_A700 flex font-sulphurpoint items-center justify-start mt-9 p-3.5 w-full">
                <div className="flex md:flex-col flex-row gap-[19px] items-start justify-between mb-[9px] mt-[13px] w-[97%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="font-bold mt-1 text-gray_900 text-left w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Recent Activity
                      </Text>
                      <div className="bg-gray_200_7f md:h-4 h-8 p-[7px] relative rounded-lg w-[16%] sm:w-full"></div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start mt-[31px] w-[45%] md:w-full">
                      <Img
                        src="images/img_ellipse5.png"
                        className="h-9 md:h-auto rounded-[50%] w-9"
                        alt="ellipseFive"
                      />
                      <Text
                        className="font-bold text-gray_900 text-left w-auto whitespace-nowrap"
                        variant="body4"
                      >
                        Alex Morgan sent you a message
                      </Text>
                    </div>

                    <Line className="bg-gray_200_cc h-0.5 mt-5 w-full" />
                    <div className="flex flex-row gap-[15px] items-center justify-start mt-[13px] w-[57%] md:w-full">
                      <Img
                        src="images/img_ellipse6.png"
                        className="h-9 md:h-auto rounded-[50%] w-9"
                        alt="ellipseSix"
                      />
                      <Text
                        className="font-bold text-gray_900 text-left w-auto whitespace-nowrap"
                        variant="body4"
                      >
                        Mujo Prosper sent you a friend request
                      </Text>
                    </div>

                    <Line className="bg-gray_200_cc h-0.5 mt-5 w-full" />
                    <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start mt-[13px] w-[86%] md:w-full">
                      <Button
                        className="flex h-9 items-center justify-center rounded-[50%] w-9"
                        size="smIcn"
                        variant="icbFillGray2007f"
                      >
                        <Img
                          src="images/img_computer.svg"
                          className="h-[18px]"
                          alt="computer"
                        />
                      </Button>
                      <Text
                        className="font-bold text-gray_900 text-left w-auto whitespace-nowrap"
                        variant="body4"
                      >
                        Upcoming Task - Create a campaign for designers due on 02/04/2023.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_200_7f h-[156px] mb-6 md:mt-0 mt-[62px] outline outline-[1px] outline-gray_900_66 rounded-[3px] w-[1%]"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default OnePage;
