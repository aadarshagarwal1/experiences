import { createSlice } from "@reduxjs/toolkit";

const places = createSlice({
  name: "places",
  initialState: [
    {
      id: 1,
      name: "BIT Canteen",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend justo nisi, eu blandit dolor volutpat ut. Nunc efficitur libero dapibus odio bibendum pellentesque. Vivamus venenatis, sem eu dictum dapibus, quam nibh hendrerit lacus, et commodo ex augue eu sapien. Mauris finibus tortor iaculis, rhoncus quam a, consectetur diam. Suspendisse odio tellus, consectetur sit amet justo quis, maximus viverra dolor. Morbi odio dolor, tincidunt id ipsum vel, venenatis lobortis ante. Aenean sed metus id nisl efficitur consequat.Cras vel libero ligula. Aenean blandit quam sit amet tincidunt condimentum. Etiam arcu odio, commodo id purus a, malesuada sagittis enim. Vivamus elementum sem in metus lobortis auctor. Phasellus eu lacus tristique, finibus erat eu, iaculis tortor. Quisque et facilisis neque. Sed luctus libero quam, ut venenatis ex tempus at. Suspendisse sapien nibh, iaculis a ex ac, dictum consectetur lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sit amet varius tellus. Ut sed tellus convallis lectus finibus ullamcorper id eu ipsum. Vestibulum viverra magna in risus semper, non mattis est rhoncus. Phasellus dolor nisi, blandit id quam vel, porttitor aliquam mauris. Quisque in risus commodo, interdum lacus nec, pharetra lectus. Donec nulla nisi, dapibus iaculis ornare.",
      images: [
        "bitCanteen/image (1).png",
        "bitCanteen/image (2).png",
        "bitCanteen/image (3).png",
        "bitCanteen/image (4).png",
      ],
      mapLink: "https://maps.app.goo.gl/tq9WJ4hwxfiViAKK9",
      link: "/experiences/bit-canteen",
    },
    {
      id: 2,
      name: "Nescafé",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ipsum mi, semper at justo eu, tempor ornare ante. Cras condimentum vestibulum malesuada. Duis at eleifend leo. Integer a sagittis dui. Sed elementum erat quis diam dictum eleifend. Vestibulum hendrerit, turpis ornare iaculis feugiat, odio leo interdum lorem, a placerat velit nunc pharetra urna. Etiam nec semper enim. Nulla imperdiet dictum erat nec vestibulum. Donec vitae nulla eu elit iaculis pulvinar quis maximus ex. Mauris ultrices libero mi, sed lacinia erat ornare a. Etiam feugiat leo mauris, ac ultricies tortor convallis a. Integer vel velit sapien.Suspendisse rutrum eros maximus purus semper scelerisque. Integer risus ipsum, facilisis quis tempor at, hendrerit nec odio. Duis accumsan erat egestas, interdum tellus ut, mollis sem. Nunc id velit a metus fringilla egestas. Pellentesque lacinia egestas tristique. Proin leo nibh, fringilla quis facilisis auctor, scelerisque eget velit. Suspendisse ac ante ante.Suspendisse suscipit fringilla ullamcorper. Morbi ultricies tortor in tellus mollis, nec cursus eros aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi tristique ipsum vel sem euismod vehicula. Aenean ipsum dolor, iaculis consectetur commodo eu, pharetra a lacus. Cras luctus libero ac enim feugiat, et vehicula nulla efficitur.",
      images: ["nescafe/image (1).png", "nescafe/image (2).png"],
      mapLink: "https://maps.app.goo.gl/5M4i7vQHENBzXoaP7",
      link: "/experiences/place-2",
    },
    {
      id: 3,
      name: "Piya Milan Chowk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non euismod metus. Duis et diam a orci ultricies sollicitudin accumsan ut massa. Praesent tincidunt eget diam lacinia eleifend. Vestibulum gravida luctus porttitor. Suspendisse vitae ex commodo, mattis nibh vel, commodo libero. In lacus est, porttitor ut egestas vel, aliquet ut arcu. Pellentesque sollicitudin massa vel dui pharetra condimentum. Aliquam cursus arcu justo, quis vestibulum magna volutpat at. Vestibulum lobortis placerat orci id ultricies.Integer interdum feugiat ante, a pretium arcu accumsan eget. Pellentesque fermentum eros laoreet ipsum congue, pharetra tempor metus ullamcorper. Etiam vitae metus mauris. Donec pellentesque nulla eget mauris mollis vulputate. Nulla facilisi. Suspendisse nec nisi tincidunt, fermentum leo quis, pellentesque nisi. Curabitur sodales magna id sem vulputate, ut maximus eros congue. Praesent id blandit lacus. Proin urna eros, ultricies ut purus non, tempus consequat turpis. Cras in enim mauris. Fusce porta odio mauris, id tristique orci rutrum sit amet. Etiam aliquam feugiat lorem sit amet venenatis. Duis in euismod sem.Nulla ultrices ex in dui convallis porttitor. Etiam nec lectus quis lectus finibus dictum vestibulum vitae massa. Fusce at pulvinar arcu. Aliquam laoreet urna at erat fringilla varius. Mauris vehicula, nulla eget placerat egestas, nunc arcu ornare.",
      images: ["pmc/image (1).png", "pmc/image (2).png"],
      mapLink: "https://maps.app.goo.gl/r6gXACU84QU9C44D7",
      link: "/experiences/place-3",
    },
    {
      id: 4,
      name: "Aunty Maggie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt accumsan odio eget bibendum. In fermentum malesuada augue, tristique rutrum lacus dapibus in. Mauris bibendum in justo et pharetra. Suspendisse pharetra consequat nisl ut sodales. Morbi vestibulum tellus massa, sed bibendum tellus ornare vel. Pellentesque vel interdum quam. Cras quis felis dolor. Ut vehicula dignissim faucibus. Vivamus sit amet porttitor urna.Suspendisse malesuada nibh magna. Suspendisse potenti. Sed ullamcorper efficitur purus, id placerat nisi egestas quis. Vivamus sit amet augue nec erat lacinia maximus vel non dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis in erat cursus, mattis quam tincidunt, pellentesque sem. In hac habitasse platea dictumst. Praesent eget accumsan risus. Cras felis nulla, varius non vulputate rutrum, blandit quis mi. Donec ut elit ut ex sodales maximus nec eu lacus. Vestibulum ultrices ligula eu fermentum vestibulum.Nunc tortor risus, hendrerit at suscipit quis, aliquam non nisi. Donec sit amet congue purus. Donec rutrum nisl ac dolor tristique, et porttitor ipsum tempus. Curabitur ut risus laoreet purus commodo fringilla vel vel tellus. Aenean vel finibus purus, eu tempor dui. Aenean molestie dui ex, vitae accumsan justo dictum sed. Nam placerat eros eu diam egestas ullamcorper. Duis.",
      images: ["auntyMaggie/image (1).png", "auntyMaggie/image (2).png"],
      mapLink: "https://maps.app.goo.gl/rFCBAhP8PvnGhPTk7",
      link: "/experiences/place-4",
    },
    {
      id: 5,
      name: "Tiger Road",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper, ligula quis pellentesque blandit, sem nibh tempor ligula, in posuere ante est at enim. Sed odio erat, elementum non venenatis vitae, scelerisque vitae massa. Vestibulum vel neque non leo fermentum viverra. Pellentesque tincidunt convallis facilisis. Phasellus semper leo imperdiet enim sollicitudin pretium. Donec nec pretium orci. Sed quis pellentesque tortor, eget cursus metus. Nunc laoreet aliquam purus. Curabitur sagittis, est vitae varius egestas, nulla arcu hendrerit ipsum, eget pellentesque diam metus eu risus. Aliquam enim nulla, sollicitudin vitae commodo id, porta a sapien. Phasellus gravida varius diam, et pellentesque eros dapibus eu. Quisque facilisis felis quis tellus facilisis volutpat. Donec iaculis ipsum congue, posuere tortor eget, ullamcorper est. Nunc convallis, magna nec dignissim pretium, libero velit fermentum eros, et dictum est lorem sed libero. Nulla sed placerat ex.Nam ultrices varius hendrerit. Etiam eu leo ut diam convallis eleifend porttitor id mauris. Sed luctus rutrum dui, nec congue diam pulvinar eu. Nunc ac elementum ex. Donec nec nulla id tortor luctus commodo. Donec id turpis eros. Quisque vestibulum nisi ac gravida rutrum. Sed nec tellus tincidunt mi tempor posuere sit amet ut erat. Suspendisse ultricies erat sed lacus posuere, lobortis.",
      images: [
        "tigerRoad/image (1).png",
        "tigerRoad/image (2).png",
        "tigerRoad/image (3).png",
        "tigerRoad/image (4).png",
      ],
      mapLink: "https://maps.app.goo.gl/Mfycho2v6xKK7QuJ9",
      link: "/experiences/place-5",
    },
    {
      id: 6,
      name: "Deshpande Auditorium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sodales erat. Sed sagittis dui erat. In pretium ex sed vestibulum imperdiet. Curabitur vulputate bibendum arcu, quis pretium nunc vehicula dignissim. Nunc risus nibh, maximus vitae nisl sed, vulputate sollicitudin sem. Sed justo ante, faucibus eu dui nec, suscipit hendrerit orci. Nam eu malesuada metus. Maecenas tellus risus, suscipit ac molestie in, porttitor eget sem. Proin a quam quam. Nulla blandit nunc id mi dapibus, in elementum nunc viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse a enim vitae libero viverra vestibulum. Nam in sagittis quam, nec dapibus turpis. Aenean pulvinar metus at tortor porttitor, vel egestas odio fringilla. Etiam ut pharetra ex, sit amet ullamcorper risus.Praesent ut malesuada turpis, eget tristique orci. Suspendisse id gravida ex. Integer porttitor elit at neque molestie, sed vehicula orci consectetur. Cras id nisl porta, cursus lectus eget, convallis justo. Aenean eget mollis lacus, vitae tristique sapien. Aenean quis neque ut erat elementum dignissim ac eget diam. Sed ut consectetur libero, a sodales justo. Nam justo nunc, luctus a bibendum tempor, tristique sed nisl. Duis efficitur lorem eu rutrum consectetur. Quisque at orci quis ex pellentesque.",
      images: [
        "dpa/image (1).png",
        "dpa/image (2).png",
        "dpa/image (3).png",
        "dpa/image (4).png",
        "dpa/image (5).png",
      ],
      mapLink: "https://maps.app.goo.gl/u9kogLQ3Z6ELuMXJ9",
      link: "/experiences/place-6",
    },

    {
      id: 7,
      name: "Baba Ka Dhaba",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur accumsan orci, vitae pharetra sapien tempor pharetra. Proin molestie tempor ex, eget aliquet felis venenatis egestas. Donec eu orci tellus. Nulla scelerisque in lorem commodo fringilla. Vestibulum tempor ipsum enim. Fusce fermentum elit nec consectetur cursus. Pellentesque ut pharetra nulla. Nullam gravida varius tincidunt. Phasellus posuere auctor magna, vel volutpat velit imperdiet in. Vivamus eu arcu dapibus, rhoncus erat vel, venenatis metus. Nullam varius, lacus sed venenatis pretium, nisl risus dapibus libero, sed placerat arcu dolor imperdiet tortor. Mauris arcu ex, venenatis sed ante non, venenatis tincidunt justo. Nunc sit amet feugiat elit. Curabitur a odio placerat, ullamcorper nunc id, aliquam nisi. Etiam rutrum facilisis sagittis.Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas est neque, malesuada et fringilla et, placerat ac arcu. Curabitur hendrerit neque ut eros scelerisque consequat. Phasellus mauris libero, porttitor a porta quis, finibus vel purus. Pellentesque ultricies orci laoreet, blandit lectus pharetra, pulvinar nulla. Nam non elit eget tellus facilisis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi nec hendrerit ex. Duis sit amet massa turpis. Nullam turpis diam, facilisis at iaculis non, imperdiet a.",
      images: ["bkd/image (1).png", "bkd/image (2).png", "bkd/image (3).png"],
      mapLink: "https://maps.app.goo.gl/XYtydzSVuhf287CLA",
      link: "/experiences/place-7",
    },
  ],
});
export default places;
