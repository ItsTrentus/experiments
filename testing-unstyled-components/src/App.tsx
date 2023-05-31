import { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
// import { Switch } from '@headlessui/react';

export default function App() {
    const [enabled, setEnabled] = useState(false);

    return (
        <section className="grid items-center">
            <Switch.Root className="bg-blue-600 inline-flex h-6  w-11 items-center rounded-full" id="airplane-mode">
                <Switch.Thumb
                    className={`${checked ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch.Root>
            {/* <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
                {({ checked }) => (
                    <button className={`${checked ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}>
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${
                                checked ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                        />
                    </button>
                )}
            </Switch> */}
        </section>
    );
}
