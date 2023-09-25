export const queryFace = () => {
  return Promise.resolve({
      status: 200,
      message: "ok",
      data: {
        img: 'https://sirius.130014.xyz/2023/09/13/1.png',
        imgData: {          
          width: 679,
          height: 465
        },

        // 响应内容参数参考：https://blog.csdn.net/qq_44807642/article/details/97767696
        num: 7,   // 人脸数量
        list: [   // 人脸信息列表
          {
            token: "cb2a280c4b10051f1611751b406d977c", // 人脸图片唯一标识
            location: {
              // 人脸位置信息 1
              left: 77, // 人脸区域左边界距离
              top: 108, // 人脸区域上边界距离
              width: 75, // 人脸区域宽度
              height: 88, // 人脸区域高度
              rotation: -2, // 人脸框竖直方向顺时针旋转角
            },
            probability: 1, // 人脸置信度，范围【0-1】，代表这是一张人脸的概率，0最小、1最大
            angle: {
              // 人脸旋转角度参数
              yaw: 5.88, // 三位旋转之左右旋转角
              pitch: -6.44, // 三维旋转之俯仰角度
              roll: -2.69, // 平面内旋转角
            },
            shape: {
              type: "triangle",
              probability: 1,
            },
            beauty: 42.68,
            age: 24,
          },
          {
            token: "cb2a280c4b10051f1611751b406d977d", // 人脸图片唯一标识
            location: {
              // 人脸位置信息 2
              left: 189, // 人脸区域左边界距离
              top: 289, // 人脸区域上边界距离
              width: 86, // 人脸区域宽度
              height: 114, // 人脸区域高度
              rotation: -2, // 人脸框竖直方向顺时针旋转角
            },
            probability: 1, // 人脸置信度，范围【0-1】，代表这是一张人脸的概率，0最小、1最大
            angle: {
              // 人脸旋转角度参数
              yaw: 5.88, // 三位旋转之左右旋转角
              pitch: -6.44, // 三维旋转之俯仰角度
              roll: -2.69, // 平面内旋转角
            },
            shape: {
              type: "triangle",
              probability: 1,
            },
            beauty: 42.68,
            age: 24,
          },
        ],
      }
  })
};