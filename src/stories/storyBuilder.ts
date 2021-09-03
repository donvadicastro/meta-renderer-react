import {Story} from "@storybook/react";
import {Form} from "meta-framework/dist/app/models/components/form";

export class StoryBuilder {
    public static build(template: Story<any>, name: string, declaration: any): Story {
        const story = template.bind({});
        const element = new Form(declaration);

        element.initialize();

        story.storyName = name;
        story.args = {
            meta: element._meta,
            elementRef: () => element
        }

        return story;
    }
}
