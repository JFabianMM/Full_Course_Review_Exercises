import Gallery from "./Gallery";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { Meta } from '@storybook/react';

export default {
    title: "components/Gallery",
    component: Gallery,
    decorators: [
        () => (
            <Provider store={store} >
              <Gallery />
            </Provider>
        ),
    ]
};

const Template = () => <Gallery/>;

export const Primary = Template.bind({});