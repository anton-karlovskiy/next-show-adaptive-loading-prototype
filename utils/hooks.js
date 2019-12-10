/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useMemoryStatus } from 'react-adaptive-hooks/memory';
import { useNetworkStatus } from 'react-adaptive-hooks/network';

import { ADAPTIVE_LOADING, checkLiteMode } from '../config';

const useCheckLiteMode = (clientHintEct, clientHintDeviceMemory) => {
  const { effectiveConnectionType } = useNetworkStatus(clientHintEct || ADAPTIVE_LOADING.DEFAULT_ECT);
  const { deviceMemory } = useMemoryStatus({deviceMemory: clientHintDeviceMemory || ADAPTIVE_LOADING.DEFAULT_DEVICE_MEMORY});
  
  const isLiteMode = checkLiteMode(effectiveConnectionType, deviceMemory);
  return isLiteMode;
};

export { useCheckLiteMode };
