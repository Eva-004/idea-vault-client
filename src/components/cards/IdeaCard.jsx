
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { BsArrowUpRightSquare } from "react-icons/bs";


const IdeaCard = ({idea}) => {
    return (
        <div>
            <Card className="relative mx-auto w-full max-w-sm pt-0 border border-purple-500">
                <div className="absolute inset-0 z-30 aspect-video " />
                <Image
                    src={idea.image}
                    alt="Event cover"
                    width={200}
                    height={200}
                    className="relative z-20 aspect-video w-full object-cover  "
                />
                <CardHeader>
                    <CardAction>
                        <Badge className={'text-lg text-pink-700'} variant="secondary">{idea.category}</Badge>
                    </CardAction>
                    <CardTitle className={'font-semibold text-2xl '}>{idea.ideaTitle}</CardTitle>
                    <CardDescription className={'line-clamp-1'}>
                        {idea.shortDescription}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button variant="outline" className="w-full border  text-blue-700">View Details <BsArrowUpRightSquare /></Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default IdeaCard;